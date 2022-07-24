const copypasteService = require('../Services/copyPaste')
function checkValidation(params){
    if(params.title && params.body){
        return true;
    } else {
        return false;
    }
}
module.exports = {
    async post(req,res){
        const isValid = checkValidation(req.body);
        if(isValid){
            const params = req.body;
            const object = await copypasteService.writeToDB(params);
            res.json({id: object._id});
            res.end();
        }
        else {
            res.status(500).json({ error: 'message' })
            res.end();
        }
    },
    async get(req,res){
        if(req.params.id || req.body.id){
            const response = await copypasteService.LoadFromLocalDB(req.params.id);
            if(response === null) {
                res.status(500).json({ error: 'message' })
                res.end();
            } else {
                res.json(response)
                res.end();
            }
        } else {
            res.status(500).json({ error: 'message' })
            res.end();
        }
    },
}