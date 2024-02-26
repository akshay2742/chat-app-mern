const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect('mongodb+srv://Saad_Mohamed_Saad:z9NhzI8y3LmWhCmO@lms.wu8y1pe.mongodb.net/group_youssef?retryWrites=true&w=majority&appName=LMS', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
