var fs = require('fs');
module.exports ={
    writeText(text){
        fs.writeFileSync(`${__dirname}/../../cambium/test.txt`, text ,(err)=>{
            if(err) console.log("err",err);
        });
    },
    readText(){
        return fs.readFileSync(`${__dirname}/../../cambium/test.txt`,(err)=>{
            if(err) console.log("err",err);
        });
    }
}