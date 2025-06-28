export default (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publicationYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Book;
};
