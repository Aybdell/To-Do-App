import cnx from '../db.js';

export const insertTask = async (user_ID, text) => {
    await cnx.query('INSERT INTO task (user_ID, text, is_checked) VALUES (?, ?, 0)', [user_ID, text]);
}

export const findTasks = async (user_ID) => {
    const [rows] = await cnx.query('SELECT * FROM task WHERE user_ID = ?', [user_ID]);
    return rows;
};

export const findTaskByID = async (task_ID) => {
    const [rows] = await cnx.query('SELECT * FROM task WHERE task_ID = ?', [task_ID]);
    return rows[0];
}

export const modifyTask = async (task_ID, text) => {
    await cnx.query(`UPDATE task SET text = ? WHERE task_ID = ?`, [text, task_ID]);
}

export const removeTask = async (task_ID) => {
    await cnx.query('DELETE FROM task WHERE task_ID = ?', [task_ID]);
}