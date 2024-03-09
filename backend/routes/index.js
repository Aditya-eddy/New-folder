const express = require('express');
const { studentRouter } = require('./student');
const { teacherRouter } = require('./teacher');

const router = express.Router();

router.use("/student", studentRouter);
router.use("/teacher", teacherRouter);

module.exports = router;