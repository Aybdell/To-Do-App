import express from "express";
import { creatTask, readTask, updateTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

// create a new task
router.post('/create', creatTask);
// read task
router.post('/read', readTask);
// update task

router.post('/update', updateTask);

// delete task
router.post('/delete', deleteTask);

export default router;