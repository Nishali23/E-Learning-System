const Announcement = require("../models/Announcement");

const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find({});
    res.status(200).json({ announcements });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.create(req.body);
    res.status(201).json({ announcement });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAnnouncement = async (req, res) => {
  try {
    const { id: announcementID } = req.params;
    const announcement = await Announcement.findOne({ _id: announcementID });
    if (!announcement) {
      return res
        .status(404)
        .json({ msg: `No task with id: ${announcementID}` });
    }
    res.status(200).json({ announcement });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateAnnouncement = async (req, res) => {
  try {
    const { id: announcementID } = req.params;
    const announcement = await Announcement.findOneAndUpdate(
      { _id: announcementID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!announcement) {
      return res
        .status(404)
        .json({ msg: `No task with id: ${announcementID}` });
    }

    res.status(200).json({ announcement });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const { id: announcementID } = req.params;
    const announcement = await Announcement.findOneAndDelete({
      _id: announcementID,
    });
    if (!announcement) {
      return res
        .status(404)
        .json({ msg: `No task with id: ${announcementID}` });
    }
    res.status(200).json({ user: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllAnnouncements,
  createAnnouncement,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
