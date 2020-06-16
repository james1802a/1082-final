const db = require("../utils/database");
const Post = class Post {  
    constructor(id, name, email, password) {
            this.id = id;   
            this.name = name; 
            this.email = email;    
            this.password = password;    
        }  
        static fetchAll() {    
            return db.execute("SELECT * FROM post");  
        }};
        // Testing
const test = async function (req, res) {  
    await Post.fetchAll().then(([rows]) => {    
        console.log(JSON.stringify(rows));  
    });
};
    test();
module.exports = Post;