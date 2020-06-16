const Post = require("../models/postModel");
const Post2 = require("../models/postModel2");

exports.getCombine = async (req, res, next) => {
let P1;
let P2;
try{
    await Post.fetchAll().then(([rows]) => {
        P1 = rows;
    })
    await Post2.fetchAll2().then(([rows]) => {
     P2 = rows;
    })
res.render('combine', {
    title1 : 'dashboard1',
    data1 : P1,
    title2 : 'dashboard2',
    data2 : P2,

});
} catch (err) {
    console.log(err);
};
};