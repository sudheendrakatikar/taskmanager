const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Task = require('../models/task');
const Employee = require('../models/employee');

//Create Task
router.post('/create', function(req,res,next) {
    let newTask = new Task({
        emp_id: req.body.emp_id, 
        mgr_id: req.body.mgr_id,
        client: req.body.client,
        category: req.body.category,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        status: req.body.status
    });
    
    Task.addTask(newTask, function(err, task) {
        if (err) {
            res.json({success:false, msg:"Failed to add task"});
        }
        else {
            res.json({success:true, msg:"Task added!"});
        }
    });
    Employee.busy(req.body.emp_id, function(err, okay) {
        if (err) {
            throw err;
        }
    });
});

//My Tasks
router.get('/tasks/:id', function(req,res,next) {
    Task.getTasks(req.params.id, function(err, tasks) {
        if (err) {
            throw err;
        }
        else {
            res.json(tasks);
        }
    });
});

//My Assignments
router.get('/assignments/:id', function(req,res,next) {
    Task.getAssignments(req.params.id, function(err, assignments) {
        if (err) {
            throw err;
        }
        else {
            res.json(assignments);
        }
    });
});

//My report
router.get('/report/:id', function(req,res,next) {
    Task.getReport(req.params.id, function(err, report) {
        if (err) {
            throw err;
        }
        else {
            res.json(report);
        }
    });
});

//Delete task
router.get('/delete/:task_id', function(req,res,next) {
    Task.deleteTask(req.params.task_id, function(err, task) {
        if (err) {
            throw err;
        }
        else {
            res.json(task);
        }
    });
});

router.post('/update', function(req,res,next) {
    let updTask = new Task({
        _id: req.body._id,
        emp_id: req.body.emp_id,
        mgr_id: req.body.mgr_id,
        client: req.body.client,
        category: req.body.category,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        status: req.body.status
    });

    Task.updateTask(updTask, function(err, task) {
        if (err) {
            res.json({success:false, msg:"Failed to update task"});
        }
        else {
            res.json({success:true, msg:"Task updated!"});
        }
    });
});

//Entire
router.get('/alltasks', function(req,res,next) {
    Task.getAll(function(err, tasks) {
        if (err) {
            throw err;
        }
        else {
            res.json(tasks);
        }
    });
});

module.exports = router;