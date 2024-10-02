import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.REACT_APP_DATABASE_URL);
      console.log("database successfully connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
