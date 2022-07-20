var Datastore = require('nedb')
var db = new Datastore({ filename: 'path/database', autoload: true });

class localdb{
    constructor(){
        if(localdb._instance) return localdb._instance;
        else localdb._instance = this;
    }

    getInstance(){
        return localdb._instance || new localdb();
    }

    setToLocalDB(params,dataCallback,errorCallback){
        db.insert(params,(err,documnet) => {
            if(err) errorCallback(err);
            dataCallback(documnet);
        })
    }
    LoadFromLocalDB(id,dataCallback,errorCallback){
        db.findOne({_id: id},(err,document) => {
            if(err) errorCallback(err);
            dataCallback(document);
        });
    }
}
module.exports = localdb;