'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Issue, {
        foreignKey: 'authorId',
      });
      User.hasMany(models.Comment);
      User.belongsToMany(models.Issue, {
        through: 'Assignees',
      });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      profile: DataTypes.STRING,
      authType: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};