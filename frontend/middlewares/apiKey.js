const User = require('../models').User;
module.exports = function(req, res, next){
    try {
        if(req.headers.apikey){
            User.findOne({
                where:{
                    token: req.headers.apikey
                }
            }).then(user => {
                if(user){
                    next();
                }else{
                    return res.status(401).json({
                        message:'Unauthorized'
                    });
                }
            })
        }else{
            return res.json({
                message:'La apikey es requerida'
            });
        }
    } catch (error) {
        return res.json({error});
    }
}