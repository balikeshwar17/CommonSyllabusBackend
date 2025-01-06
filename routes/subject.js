const express = require('express');
const router = express.Router();
const subjectController=require('../controllers/subject');

router.post('/createSubject',subjectController.createSubject);


module.exports = router;