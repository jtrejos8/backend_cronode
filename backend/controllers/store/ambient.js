const Ambient = require('../../models').Ambient;
module.exports = {
    index: async function (req, res) {
        try {
            let ambients = await Ambient.findAll({
                attributes: ['id', 'name', 'state', 'usability', 'userId'],
                include: [{
                    model: require('../../models').User,
                    required: false,
                    as: 'user',
                    attributes: ['id', 'username', 'misena_email', 'institutional_email', 'document', 'phone']
                }]
            });
            return res.status(200).json(ambients);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    }
}