require("dotenv").config();
const { connectToDatabase } = require("../helper/connect");

const eventToDb = async (event) => {
  try {
    const db = await connectToDatabase();
    const document = {
      lat: event?.Latitude.toString(),
      lon: event?.Longitude.toString(),
      timestamp: Date.now(),
      deviceId: "prototype",
    };
    await db.collection("timeline").insertOne(document);
  } catch (error) {
    console.log("Error", error);
  }
};

exports.handler = eventToDb;

// eventToDb({ Latitude: 46.360001, Longitude: -113.536598, "Step count": 102 });
