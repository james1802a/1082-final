const mysql = require("mysql2");
const pool = mysql.createPool({
      host: "localhost",  
      user: "root",  
      password: "0000",  
      database: "blogen2"
    });
    // // Testing database connection
    // pool.query("SELECT * FROM blogen2.post", function(err, results) {  
    //     console.log(JSON.stringify(results)); 
    //     // results contains rows returned byserver  
    //     console.log("Database blogen2 connected.");
    // });
module.exports = pool.promise();