const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

/*async function list() {
  const db = getDb();
  const issues = await db.collection('issues').find({}).toArray();
  return issues;
}*/

async function add(_, { user }) {

  console.log("Adding User", user);
  const db = getDb();
  const usercount = await db.collection('vannerusers').find({token :user.token}).count();
  if (usercount > 0){
    console.log("User already exists");
    return ;
  }
  user.id = await getNextSequence('fixedindex');
  user.loginTime = new Date()

  console.log("Adding User", user);
  const result = await db.collection('vannerusers').insertOne(user);
  const savedUser = await db.collection('vannerusers')
    .findOne({ _id: result.insertedId });
  console.log("Success");
  return savedUser;
}

module.exports = { add };
