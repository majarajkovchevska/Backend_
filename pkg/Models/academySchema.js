const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
});

const Academy = mongoose.model('Academy', academySchema);

module.exports = Academy;