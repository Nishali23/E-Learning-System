const Teacher = require("../models/Teacher");

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    res.status(200).json({ teachers });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json({ teacher });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTeacher = async (req, res) => {
  try {
    const { id: teacherID } = req.params;
    const teacher = await Teacher.findOne({ _id: teacherID });
    if (!teacher) {
      return res.status(404).json({ msg: `No task with id: ${teacherID}` });
    }
    res.status(200).json({ teacher });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { id: teacherID } = req.params;
    const teacher = await Teacher.findOneAndUpdate(
      { _id: teacherID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!teacher) {
      return res.status(404).json({ msg: `No task with id: ${teacherID}` });
    }

    res.status(200).json({ teacher });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { id: teacherID } = req.params;
    const teacher = await Teacher.findOneAndDelete({ _id: teacherID });
    if (!teacher) {
      return res.status(404).json({ msg: `No task with id: ${teacherID}` });
    }
    res.status(200).json({ user: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
};
