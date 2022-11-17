const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipes', {
    id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      //allowNull: false,
      primaryKey : true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    analyzedInstructions: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: false
  }
)};
