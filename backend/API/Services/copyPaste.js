//var fs = require('fs');
const db = require('../Database/localdb');
const localdb = new db();

module.exports ={
    writeToDB(params){
        return new Promise((resolve, reject) => {
            localdb.setToLocalDB(params,resolve,reject);
        });

    },
    LoadFromLocalDB(params){
        return new Promise((resolve, reject) => {
            localdb.LoadFromLocalDB(params,resolve,reject);
        });
    },
}