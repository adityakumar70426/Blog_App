const mongoose = require("mongoose");

const DB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOURI2, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to database ${connection.connections[0].name}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = DB;

