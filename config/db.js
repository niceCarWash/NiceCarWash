const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongoose Erro", error);
    throw new Error(error);
  }
};

module.exports = connectDB;
