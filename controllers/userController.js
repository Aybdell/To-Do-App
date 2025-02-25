import {insertUser, findUsername} from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const signup = async(req, res) => {
    const {username, password} = req.body;
    const hashpassword = await bcrypt.hash(password, 10);

    const token = jwt.sign({username : username},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN})

    insertUser(username, hashpassword);
    res.send(`user created\n your token is: ${token}`);
    
}

export const login = async (req, res) => {
    try{
        const {username, password} = req.body;

        const token = jwt.sign({username : username}, process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN})

        const user = await findUsername(username)

        if(!user){
            res.send("PLEASE the user doesn't exist create an account")
        }else{
            const match = await bcrypt.compare(password, user.password)
            if(!match){
                res.send("Password inccorect")
            }
            res.status(201).json({
                    "message": "you're logged in",
                    "you're token is " : token
                } 
            )
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}