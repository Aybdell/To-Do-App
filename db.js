import mysql from 'mysql2'; 
import 'dotenv/config'; 

const cnx = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
}).promise();

export default cnx;