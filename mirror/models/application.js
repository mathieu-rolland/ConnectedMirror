'use strict';
module.exports = (sequelize, DataTypes) => {
  var Application = sequelize.define('Application', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    parameters: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Application.hasMany( models.Personn );
      }
    }
  });
  return Application;
};