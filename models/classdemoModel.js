const db = require('../utils/classdemo');
const Classdemo = class Classdemo {
    constructor(id, title, description, imageUrl, srcUrl){
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.srcUrl = srcUrl;
    }
    static fetchAll(){
        return db.execute("SELECT * FROM `1082-final`.final;");
    }};

        // Testing
        const test = async function (req, res) {  
            await Classdemo.fetchAll().then(([rows]) => {    
                console.log(JSON.stringify(rows));  
            });
        };
            test();
module.exports = Classdemo ;