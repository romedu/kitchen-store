import mongoose from "mongoose";

async function initializeDB(db) {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    await db.connect(process.env.DB_URL, options);
    console.log("Database connection established");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

initializeDB(mongoose);
