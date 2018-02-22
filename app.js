const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', function() {
    console.log('connected to '+config.database);
});

//On error
mongoose.connection.on('error', function() {
    console.log('error');
});

const app = express();

const users = require('./routes/users');
const employees = require('./routes/employees');
const tasks = require('./routes/tasks');
const messages = require('./routes/messages');

const port = 3000;

//cors MW
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser MW
app.use(bodyParser.json());

//Passport MW
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/employees',employees);
app.use('/api',tasks);
app.use('/messages',messages);

app.get('/', function(req,res) {
    res.send('invalid');
});

app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function() {
    console.log('Server started on port '+port);
});