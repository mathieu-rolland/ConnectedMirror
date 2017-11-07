'use strict';
module.exports = (sequelize, DataTypes) => {
  var Personn = sequelize.define('Personn', {
    id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
    },
    name :{
      type: DataTypes.STRING
    },
    firstname: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Personn;
};