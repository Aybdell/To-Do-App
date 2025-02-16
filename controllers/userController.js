import {insertUser, findUsername} from '../models/userModel.js';


export const signup = async(req, res) => {
    const {username, password} = req.body;
    insertUser(username, password);
    res.send('user created');
    
}

export const login = async (req, res) => {
    const{username, password} = req.body;
    const user = await findUsername(username);
    if(!user){
        res.send("PLEASE the user doesn't exist create an account")
    }else{
        if(user.password === password){
            res.send("you're logged in")
        }
        res.send("Password inccoreect")
    }
}



