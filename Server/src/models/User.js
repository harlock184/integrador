const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {

      id: {
         type: DataTypes.INTEGER,
         allownNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         allownNull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allownNull: false
      },

   }, { timestamps: false });
};
