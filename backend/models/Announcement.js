const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
  senderType: {
    type: String,
    enum: ["Student", "Teacher"],
    required: [true, "Sender type is required"],
  },

  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [50, "Title cannot be more than 50 characters"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    maxlength: [500, "Message cannot be more than 500 characters"],
  },
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
