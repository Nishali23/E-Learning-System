const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: [true, "must provide student ID"],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "must provide email"],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "please provide a valid email address",
    ],
  },
});

module.exports = mongoose.model("Student", StudentSchema);
