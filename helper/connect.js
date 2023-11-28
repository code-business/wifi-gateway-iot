require("dotenv").config();
const { MongoClient, Db } = require("mongodb");

let cachedDb = null;
/**
 * @returns {Promise<Db>} -Promise of type Db instance
 */
async function connectToDatabase() {
  const uri = process.env.MONGODB_URL;
  try {
    if (cachedDb == null) {
      const client = await MongoClient.connect(uri, {
        connectTimeoutMS: 60000,
        serverSelectionTimeoutMS: 5000,
      });
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
