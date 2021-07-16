import mongoose from "mongoose";
const { DB_URL } = process.env;

async function initializeDB(db) {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    await db.connect(DB_URL, options);
    console.log("Database connection established");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

initializeDB(mongoose);
