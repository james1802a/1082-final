const Post2 = require("../models/postModel2");
exports.getPosts = async (req, res, next) => { 
    await Post2.fetchAll2().then(([rows]) => {    
        // console.log(JSON.stringify(rows));    
        // res.json(rows);    
        // res.render("dashboard", { data: rows }); 
        res.render("dashboard", { data: rows, title: "Dashboard" });
    });
};