const express = require('express')
const mysql = require('mysql2')
const app = express()

const port =  5000

const db = mysql.createConnection({
    host:'localhost',
    user:'sadid369',
    password:'123456',
    database:'acme'
})
db.connect();
app.get('/users' , (req , res)=>{

   const sql = 'select * from users';
   db.query(sql, (err, result)=>{
    if(err) {throw err}
    res.send(result)
   })

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))