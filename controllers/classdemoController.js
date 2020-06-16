const Classdemo = require('../models/classdemoModel');
exports.getClassdemo = (req, res) => {
    let demos;
    try{
Classdemo.fetchAll().then(([rows]) =>{
    demos = rows;
    console.log(JSON.stringify(rows));
    // res.json(demos);
    res.render('classdemo', {
        data : demos,
        title : "108-2 Class Demo",
    })
});
    } catch (err) {
        console.log(err);
}};