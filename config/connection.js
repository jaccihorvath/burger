const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'qgrfqtley29zinwu',
    password: 'bey2rv95rm6g5jbe',
    database: 'ixmev0724ga0pr8j'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;