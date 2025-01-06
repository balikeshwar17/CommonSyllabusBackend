const mongoose = require('mongoose');

// Schema for a Subject
const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the subject (e.g., "Physics")
  className: { type: String, required: true }, // Name of the class (e.g., "Class XI")
  units: [
    {
      name: { type: String, required: true }, // Name of the unit (e.g., "Unit I")
      chapters: [
        {
          name: { type: String, required: true }, // Name of the chapter (e.g., "Kinematics")
          chapterNumber: { type: Number, required: true }, // Number of the chapter
          topics: [{ name: { type: String, required: true } }] // Array of topic names as strings
        }
      ]
    }
  ]
});

// Indexing for quick search (if needed)
SubjectSchema.index({ name: 1, className: 1 });

// Create the Subject Model
const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = { Subject };
