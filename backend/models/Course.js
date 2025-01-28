const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: [true, "must provide course ID"],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "must provide course name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
});

module.exports = mongoose.model("Course", CourseSchema);
