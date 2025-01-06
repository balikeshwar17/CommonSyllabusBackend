const {Subject} = require('../models/subject.js');

exports.createSubject = async(req, res) => {
    try {
      const data=req.body;
      if(!data){
        return res.status(400).json({ message: 'Subject data is required' });
      }
      const subjectName=data.name;
      const className=data.className;
      if(!subjectName || !className){
        return res.status(400).json({ message: 'Subject name and class name are required' });
      }

      const existingSubject = await Subject.findOne({ name: subjectName,className:className });

      if (existingSubject) {
        return res.status(400).json({ message: 'Subject already exists' });
      }
      const subject = new Subject(data);
      subject.save();
      res.status(201).json({ message: 'Subject created successfully' });
    } catch (error) {
      console.error('Error creating subject:', error);
      res.status(500).json({ message: 'Error creating subject' });
    }
}




