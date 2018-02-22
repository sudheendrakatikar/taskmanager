const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Employee = require('../models/employee');
const config = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//Get profile
router.get('/profile/:id', function(req,res,next) {
    Employee.getProfile(req.params.id, function(err, employee) {
        if (err) {
            throw err;
        }
        else {
            res.json(employee);
        }
    });
});

//Get team
router.get('/team/:mgr_id', function(req,res,next) {
    Employee.getTeam(req.params.mgr_id, function(err, users) {
        if (err) {
            throw err;
        }
        else {
            res.json(users);
        }
    });
});

//Search
router.get('/search/:keyword', function(req, res, next) {
    Employee.search(req.params.keyword, function(err, results) {
        if (err) {
            throw err;
        }
        else {
            res.json(results);
        }
    });
});

module.exports = router;