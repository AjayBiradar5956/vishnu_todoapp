const mongoose = require('mongoose');

// Creating a Schema for Tasks to be stored
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    deadline: {
        type: Date,
        required: false
    }

})

// Assign a model for that schema
const List = mongoose.model('Tasks', taskSchema);

module.exports = List;