"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clinic.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.TEXT,
      descriptionMarkdown: DataTypes.TEXT,
      descriptionHTML: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Clinic",
    }
  );
  return Clinic;
};
