const Course = require("../models/Course");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({ course });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOne({ _id: courseID });
    if (!course) {
      return res.status(404).json({ msg: `No task with id: ${courseID}` });
    }
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOneAndUpdate({ _id: courseID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).json({ msg: `No task with id: ${courseID}` });
    }

    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOneAndDelete({ _id: courseID });
    if (!course) {
      return res.status(404).json({ msg: `No task with id: ${courseID}` });
    }
    res.status(200).json({ user: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
};
