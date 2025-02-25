import { findUsername } from '../models/userModel.js';
import { insertTask, findTasks, findTaskByID, modifyTask, removeTask } from '../models/taskModel.js';

export const creatTask = async (req, res) => {
    const { username, text } = req.body;

    const user = await findUsername(username);
    if (!user) {
        return res.send("User doesn't exist");
    }

    const user_ID = user.User_id;

    await insertTask(user_ID, text);
    res.send("Task created");
}

export const readTask = async (req, res) => {
    const { username } = req.body;

    const user = await findUsername(username);
    if (!user) {
        return res.send("User doesn't exist");
    }

    const user_ID = user.User_id;

    const tasks = await findTasks(user_ID);
    res.send(tasks);
};

export const updateTask = async (req, res) => {
    const {username, taksID, text} = req.body;

    const user = await findUsername(username);
    if (!user) {
        return res.send("User doesn't exist");
    }else{
        const isThere = await findTaskByID(taksID);
        if(!isThere){
            return res.send("Task doesn't exist");
        }else{
            await modifyTask(taksID, text);
            res.json({
                "username":username,
                "taskID":taksID,
                "text":text,
                "message":"Task updated"
            })
        }
    }
}

export const deleteTask = async (req, res) => {
    const {username, taskID} = req.body;

    const user = await findUsername(username);
    if (!user){
        return res.send("User doesn't exist");
    }else{
        const isThere = await findTaskByID(taskID);
        if(!isThere){
            return res.send("Task doesn't exist");
        }else{
            await removeTask(taskID);
            res.json({
                "username":username,
                "taskID":taskID,
                "message":"Task deleted"
            })
    }

    }}