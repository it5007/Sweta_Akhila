/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/issuetracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker scripts/init.mongo.js
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.vannerusers.remove({});
/*
const initialusers = [
    {
      id: 1, name: 'Jack', phone: 88885555,
      bookingTime: new Date()
    },
    {
      id: 2, name: 'Rose', phone: 88884444,
      bookingTime: new Date()
    },
  ];
db.vannerusers.insertMany(initialusers);
const count = db.vannerusers.count();
print('Inserted', count, 'Users');
*/
const count = 0 ;
db.counters.remove({ _id: 'fixedindex' });
db.counters.insert({ _id: 'fixedindex', current: count });

db.vannerusers.createIndex({ id: 1 }, { unique: true });
db.vannerusers.createIndex({ name: 1 });
db.vannerusers.createIndex({ token: 1 });
db.vannerusers.createIndex({ loginTime: 1 });
