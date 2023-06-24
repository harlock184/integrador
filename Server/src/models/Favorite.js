const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type:DataTypes.INTEGER,
         allownNull: false,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allownNull: false
      },
      status: {
         type: DataTypes.ENUM("Alive","Dead","unknown"),
         allownNull: false

      },
      species: {
         type: DataTypes.STRING,
         allownNull: false
      },
      gender: {
         type: DataTypes.ENUM("Female","Male","Genderless","unknown"),
         allownNull: false
      },
      origin: {
         type: DataTypes.STRING,
         allownNull: false
      },
      image: {
         type: DataTypes.STRING,
         allownNull: false
      },
      
   }, { timestamps: false });
};
