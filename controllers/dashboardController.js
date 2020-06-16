const Post = require("../models/postModel");
exports.getPosts = async (req, res, next) => { 
    await Post.fetchAll().then(([rows]) => {    
        res.render("dashboard", { data: rows, title: "Dashboard" });
    });
};