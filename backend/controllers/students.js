const Student = require("../models/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOne({ _id: studentID });
    if (!student) {
      return res.status(404).json({ msg: `No task with id: ${studentID}` });
    }
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOneAndUpdate(
      { _id: studentID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!student) {
      return res.status(404).json({ msg: `No task with id: ${studentID}` });
    }

    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOneAndDelete({ _id: studentID });
    if (!student) {
      return res.status(404).json({ msg: `No task with id: ${studentID}` });
    }
    res.status(200).json({ user: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
