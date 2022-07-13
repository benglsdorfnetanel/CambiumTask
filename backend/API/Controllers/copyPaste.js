const copypasteService = require('../Services/copyPaste')
module.exports = {
    post(req,res){
        const text = req.body;
        copypasteService.writeText(text.text);
        res.end();
    },
    get(req,res){
        const response = copypasteService.readText();
        res.json(response.toString());
        res.end();
    },
}