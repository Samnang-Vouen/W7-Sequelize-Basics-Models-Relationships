import { sequelize, Author } from '../models/index.js';

(async () => {
  await sequelize.sync({ force: true });

  // Ronan
  const ronan = await Author.create({ name: 'Ronan The Best', birthYear: 1990 });
  await ronan.createBook({ title: 'Ronan Book 1', publicationYear: 2010, pages: 200 });
  await ronan.createBook({ title: 'Ronan Book 2', publicationYear: 2015, pages: 300 });
  // Kim
  const kim = await Author.create({ name: 'Kim Ang', birthYear: 1995 });
  await kim.createBook({ title: 'Kim Book 1', publicationYear: 2018, pages: 150 });
  await kim.createBook({ title: 'Kim Book 2', publicationYear: 2020, pages: 220 });

  // Hok
  const hok = await Author.create({ name: 'Hok Tim', birthYear: 2015 });
  await hok.createBook({ title: 'Hok Book 1', publicationYear: 2022, pages: 100 });
  await hok.createBook({ title: 'Hok Book 2', publicationYear: 2023, pages: 120 });

  console.log('Sample data seeded successfully.');
})();

