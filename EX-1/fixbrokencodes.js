/* 1
Issue:
+ User.hasOne(Profile) creates:
    - user.createProfile()
    - user.getProfile()
    - profile.getUser()
    - profile.setUser()
+ But NOT profile.createUser().
+ So profile.createUser() does not exist.

Fix:
+ Create the User first, then call user.createProfile().
*/

User.hasOne(Profile);

await sequelize.sync();

const user = await User.create({ username: 'joe' });
const profile = await user.createProfile({ bio: 'Test' });

/* 2
Issue:
+ Book.hasMany(Author) sets up:
    - book.getAuthors(), book.addAuthor(), book.createAuthor()
    - author.getBook(), author.setBook()
+ But NOT author.createBook().
+ So author.createBook() does not exist.

Fix:
+ The association is the wrong direction.
  If each Author writes many Books, it should be:
    Author.hasMany(Book);
  Then author.createBook() will exist.
*/

Author.hasMany(Book);

await sequelize.sync();

const author = await Author.create({ name: 'Samnang' });
const book = await author.createBook({ title: 'Correct Way' });

/* 3
Issue:
+ User.hasOne(Profile) + Profile.belongsTo(User) creates:
    - user.getProfile(), user.setProfile(), user.createProfile()
    - profile.getUser(), profile.setUser()
+ But NOT user.addProfile().
+ So user.addProfile() does not exist.

Fix:
+ Use user.setProfile(profile) instead.
*/

User.hasOne(Profile);
Profile.belongsTo(User);

await sequelize.sync();

const User = await User.create({ username: 'Jon' });
const Profile = await Profile.create({ bio: 'hello' });

await user.setProfile(profile);

/* 4
Issue:
+ Employee.hasOne(Manager)
+ Manager.hasOne(Employee)
=> Circular 1-to-1 relationships.
=> Creates ambiguous foreign keys and confusion.

Fix:
+ Decide the correct direction.
  Usually: each Employee belongs to one Manager, and each Manager has many Employees.

Recommendation:
Manager.hasMany(Employee);
Employee.belongsTo(Manager);
*/

Manager.hasMany(Employee);
Employee.belongsTo(Manager);
