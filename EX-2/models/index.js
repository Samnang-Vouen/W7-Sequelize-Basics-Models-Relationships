import { Sequelize, DataTypes } from 'sequelize';
import AuthorFactory from './author.js';
import BookFactory from './book.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Author = AuthorFactory(sequelize, DataTypes);
const Book = BookFactory(sequelize, DataTypes);

// Relationships
Author.hasMany(Book);
Book.belongsTo(Author);

export { sequelize, Author, Book };