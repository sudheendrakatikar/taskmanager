const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Task = require('../models/task');

//Employee schema
const EmployeeSchema = mongoose.Schema(
    {
        _id: {
            type: Number
        },
        name: {
            type: String
        },
        designation: {
            type: String
        },
        mgr_id: {
            type: Number
        },
        email: {
            type: String
        },
        contact: {
            type: Number
        },
        designation: {
            type: String
        }
    }
);

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);

//Get profile
module.exports.getProfile = function(id, callback) {
    Employee.findById(id, callback);
    /*const query = {_id: +id};
    Employee.aggregate([
        { $match: query },
        {
            $lookup:
            {
                from: "employees",
                localField: "mgr_id",
                foreignField: "_id",
                as: "manager"
            }
        } 
    ], callback);*/
}

//Get all
module.exports.getTeam = function(id, callback) {
    const query = {mgr_id: id};
    Employee.find(query, callback);
}

//Add employee
module.exports.addEmployee = function(newEmployee, callback) {
    newEmployee.save(callback);
}

//Search
module.exports.search = function(keyword, callback) {
const query = { $or: [
                { name: { $regex: new RegExp(keyword, "i") } },
                { designation: { $regex: new RegExp(keyword, "i") } }
            ]};
    
    Employee.find(query, callback);
}

module.exports.busy = function(id, callback) {
    Employee.findByIdAndUpdate(id, {$inc: {count: 1}}, callback);
}
