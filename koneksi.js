var mysql = require('mysql');

//membuat koneksi DB
const conn = mysql.createConnection({
    host:"localhost",
    user:"route",
    password: "",
    database:'restapidb'
});

conn.connect((err)=>{
    if(err)throw err;
    console.log('MySQL terkoneksi');
})

module.exports = conn;