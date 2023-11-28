require("dotenv").config();
const { MongoClient } = require("mongodb");

let cachedDb = null;

async function connectToDatabase() {
  const uri = process.env.MONGO_URL;
  try {
    if (cachedDb == null) {
      console.log("uri", uri);
      const client = new MongoClient(uri, {
        connectTimeoutMS: 60000,
        serverSelectionTimeoutMS: 5000,
      });

      await client.connect();
      cachedDb = client.db(process.env.DB_NAME);
      return cachedDb;
    }
    return Promise.resolve(cachedDb);
  } catch (error) {
    console.log("db connection error :>> ", error);
  }
}

module.exports = {
  connectToDatabase: connectToDatabase,
};
