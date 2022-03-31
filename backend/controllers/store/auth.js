const User = require('../../models').User;
const bcrypt = require('bcryptjs');

module.exports = {
    authenticate: async function(req, res){
        try {
            let user =  await User.findOne({
                where:{
                    misena_email:req.body.misena_email
                }
            });
            let passwordIsValid = await bcrypt.compare(req.body.password, user.password);
            if(!passwordIsValid){
                return res.json({
                    message:'Contraseña incorrecta'
                });
            }
            return res.json({
                token: user.token
            });
        } catch (error) {
            return res.json(error);
        }
    }
}