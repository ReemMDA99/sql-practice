const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Career@uoft2022',
      database: 'elections'
    },
    console.log('Connected to the elections database.')
);
module.exports = db;
