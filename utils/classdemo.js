const mysql = require("mysql2");
const pool = mysql.createPool({
      host: "localhost",  
      user: "root",  
      password: "0000",  
      database: "1082-final"
    });
    // // Testing database connection
    // pool.query("SELECT * FROM post", function(err, results) {  
    //     console.log(JSON.stringify(results)); 
    //     // results contains rows returned byserver  
    //     console.log("Database blogen connected.");
    // });
module.exports = pool.promise();