const User = require('../../models/').User;
const {Op} = require('sequelize');
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id === 3 || req.user.rol.id === 1) {
                let instructors = await User.findAll({
                    where: {
                        [Op.or]:[{
                            rolId: 2,    
                        },{
                            positionId: 21
                        }]                        
                    },
                    attributes:[
                        'id',
                        'username',
                        'misena_email',
                        'institutional_email',
                        'document',
                        'birthdate',
                        'phone',
                        'phone_ip',
                        'gender',
                        'positionId',
                        'contractTypeId',
                        'photo',
                        'state'
                    ]
                });
                return res.json({
                    instructors
                });
            } else {
                return res.json({
                    message: 'Tu rol no puede hacer esta accion'
                });
            }
        } catch (error) {
            return res.json({
                error
            });
        }
    }
}