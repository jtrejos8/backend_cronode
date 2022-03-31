const bcrypt = require("bcryptjs");
("use strict");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: { type: DataTypes.STRING, allowNull: false },
      misena_email: { type: DataTypes.STRING, allowNull: false, unique: true },
      institutional_email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: { type: DataTypes.STRING, allowNull: false },
      document: { type: DataTypes.STRING, allowNull: false, unique: true },
      birthdate: { type: DataTypes.DATE, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false, unique: true },
      phone_ip: { type: DataTypes.STRING, allowNull: true },
      gender: { type: DataTypes.STRING, allowNull: false },
      positionId: { type: DataTypes.INTEGER, allowNull: false },
      rolId: { type: DataTypes.INTEGER, allowNull: false },
      contractTypeId: { type: DataTypes.INTEGER, allowNull: false },
      profession: { type: DataTypes.STRING, allowNull: true },
      grade: { type: DataTypes.INTEGER, allowNull: false },
      isBossArea: {
        type: DataTypes.BOOLEAN,
        allowNull: null,
        defaultValue: false,
      },
      last_academic_level: { type: DataTypes.STRING, allowNull: true },
      state: { type: DataTypes.STRING, defaultValue: "Activo" },
      photo: { type: DataTypes.STRING },
      token: { type: DataTypes.STRING },
      email_state: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {}
  );
  User.login = async function (email, password) {
    let user = await User.findOne({
      where: {
        misena_email: email,
      },
      include: ["rol"],
    });
    if (!user) return { status: 404, message: "User no encontrado" };
    let valid = await user.authenticatePassword(password);
    return valid
      ? {
        status: 200,
        user,
      }
      : { status: 401, message: "Contraseña invalida" };
  };

  User.prototype.authenticatePassword = async function (password) {
    try {
      let valid = await bcrypt.compare(password, this.password);
      return valid;
    } catch (error) {
      return error;
    }
  };
  User.associate = function (models) {
    User.belongsTo(models.Position, {
      as: "position",
    });
    User.belongsTo(models.Rol, {
      as: "rol",
    });
    User.belongsTo(models.ContractType, {
      as: "contractType",
    });
    User.hasMany(models.Group, {
      as: "group",
      foreignKey: "managerId"
    });
    User.hasMany(models.Contract, {
      as: "contract",
    });
    User.hasMany(models.Schedule, {
      as: "schedules",
      foreignKey: "constantUserId",
    });
    User.hasMany(models.Notification, {
      as: "notifications",
      foreignKey: "userId",
    });
    User.hasMany(models.OtherActivity, {
      as: "otherActivity",
    });
    User.belongsToMany(models.Zone, {
      through: "UserZones",
      as: "zones",
    });
  };
  User.beforeCreate(async function (user, options) {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
      return;
    }
  });
  return User;
};
