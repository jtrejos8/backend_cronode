const jwt = require("jsonwebtoken");
module.exports = function(req, res, next) {
    try {
        if (req.headers.authorization) {
            let data = req.headers.authorization.split(' ');
            if (data[0] === "Bearer") {
                let isValidToken = jwt.verify(data[1], process.env.JWT_SECRET);
                if (isValidToken) {
                    req.user = isValidToken.user;
                    next();
                }
            } else {
                return res.status(400).json({
                    message: 'El token debe ser enviado junto a Bearer'
                });
            }
        }else{
          return res.status(401).json({
            message:'El token es requerido'
          });
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};