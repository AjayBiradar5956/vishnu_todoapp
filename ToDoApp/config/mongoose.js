const mongoose = require('mongoose');

// Creating Database connection
mongoose.connect('mongodb://127.0.0.1:27017/todo_app_db');

const db = mongoose.connection;

// While error, log it.
db.on('error', console.error.bind('Error connecting DB'));

// On Successful connection, log it.
db.once('open', function(){
    console.log('Successfully Connected.');
});