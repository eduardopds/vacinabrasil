const { DataTypes, Model } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            notNull: true,
          },
          unique: false,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            notNull: true,
          },
          unique: true,
        },
        vaccine: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        first_dose: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        second_dose: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "user",
      }
    );
  }
}
module.exports = User;
