'use strict';
module.exports = function(sequelize, DataTypes) {
  var ToDoList = sequelize.define('ToDoList', {
    title: DataTypes.STRING,
    descreption: DataTypes.STRING,
    Priority: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDoList;
};