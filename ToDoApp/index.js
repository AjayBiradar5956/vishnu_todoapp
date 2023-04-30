const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const List = require('./models/task')

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`ToDo App is up and running at port : ${port}`);
})
