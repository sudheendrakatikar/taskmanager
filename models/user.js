const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User schema
const UserSchema = mongoose.Schema(
    {
        _id: {
            type: Number
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            throw err;
        }
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            if (err) {
                throw err;
            }
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) {
            throw err;
        }
        callback(null, isMatch);
    });
}

module.exports.findAll = function(callback) {
    User.find(callback);
}