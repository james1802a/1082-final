var express = require("express");
var router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const post2Controller = require('../controllers/post2Controller')
const combineController = require('../controllers/combineController')
const classdemoController = require('../controllers/classdemoController')

router.get("/t1", dashboardController.getPosts);
router.get('/t2', post2Controller.getPosts)
router.get('/combine' ,combineController.getCombine )
router.get('/classdemo', classdemoController.getClassdemo)

// router.get("/", function(req, res, next) {  
//     res.render("dashboard", { title: "Blogen Dashboard" });
// });
router.get('/classdemo', (req, res) => { 
     res.render('classdemo', { title: '108-2 Class demo' });
    });
module.exports = router;