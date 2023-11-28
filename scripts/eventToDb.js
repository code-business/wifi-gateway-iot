require("dotenv").config();
const mongoUrl = process.env.MONGO_URL;
console.log({ mongoUrl });

const eventToDb = async (event) => {
  console.log("Testing Lambda Setup", event);
};

exports.handler = eventToDb;
// eventToDb({ event: "event" });
