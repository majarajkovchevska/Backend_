const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    adress: {
        type: String,
    },
    area: {
        type: String,
    },
});

const Course = mongoose.model("course", courseSchema);

module.exports = Course;