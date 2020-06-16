const db = require('../utils/database2');

const Post2 = class Post2{
    constructor(id, name, email, password) {
        this.id = id;   
        this.name = name; 
        this.email = email;    
        this.password = password;  
}
static fetchAll2(){
    return db.execute("SELECT * FROM blogen2.post");
    }
};

       // Testing
    //    const test = async function (req, res) {  
    //     await Post.fetchAll().then(([rows]) => {    
    //         console.log(JSON.stringify(rows));  
    //     });
    // };
    //     test();
    module.exports = Post2;