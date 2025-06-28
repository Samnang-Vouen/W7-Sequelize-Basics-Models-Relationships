export default (sequelize, DataTypes) => {
  return sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};