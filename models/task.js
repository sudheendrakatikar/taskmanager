const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Task schema
const TaskSchema = mongoose.Schema(
    {   
        emp_id: {
            type: Number
        },
        mgr_id: {
            type: Number
        },
        client: {
            type: String
        },
        category: {
            type: String
        },
        title: {
            type: String
        },
        start: {
            type: String
        },
        end: {
            type: String
        },
        status: {
            type: String
        }
    }
);

const Task = module.exports = mongoose.model('Task', TaskSchema);

module.exports.getTaskById = function(id, callback) {
    Task.findById(id, callback);
}

module.exports.addTask = function(newTask, callback) {
    newTask.save(callback);
}

module.exports.getTasks = function(id, callback) {
    const query = {emp_id: +id, mgr_id: null};
    Task.find(query, callback);
}

module.exports.getAssignments = function(id, callback) {
    const query = {emp_id: +id, mgr_id: {$ne: null}};
    Task.aggregate([
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
    ], callback);
}

module.exports.getReport = function(id, callback) {
    const query = {mgr_id: +id};
    //Task.find(query, callback);
    Task.aggregate([
        { $match: query },
        {
            $lookup:
            {
                from: "employees",
                localField: "emp_id",
                foreignField: "_id",
                as: "reporter"
            }
        }
    ], callback);
}

module.exports.deleteTask = function(id, callback) {
    Task.findByIdAndRemove(id, callback);
}

module.exports.updateTask = function(updTask, callback) {
    const query = {_id: updTask._id}
    Task.findByIdAndUpdate(query, updTask, callback);
}

module.exports.getAll = function(callback) {
    Task.find(callback);
}