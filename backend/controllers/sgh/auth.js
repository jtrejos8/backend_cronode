const User = require("../../models").User;
const jwt = require("jsonwebtoken");

module.exports = {
  authenticate: async function (req, res) {
    try {
      let data = await User.login(req.body.misena_email, req.body.password);
      if (data.user) {
        let token = jwt.sign({ user: data.user }, process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24,
        });
        return res.status(200).json({ token, rol: data.user.rol });
      }
      return res.status(data.status).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  getUserAuthenticated: async function (req, res) {
    try {
      let data = req.headers.authorization.split(" ");
      if (data[0] === "Bearer") {
        let isValidToken = jwt.verify(data[1], process.env.JWT_SECRET);
        if (isValidToken) {
          return res.status(200).json({
            user: isValidToken.user,
          });
        }
      } else {
        return res.status(400).json({
          message: "El token debe ser enviado junto a Bearer",
        });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
