import cnx from '../db.js';


export const insertUser = async (username, password) => {
    await cnx.query(`INSERT INTO users (username, password) VALUES ('${username}', '${password}')`);

}

export const findUsername = async (username) => {
    const [result] = await cnx.query(`SELECT * FROM users WHERE username = '${username}'`);
    return result[0];

}

