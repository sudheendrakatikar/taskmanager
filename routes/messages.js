const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Message = require('../models/message');

//Send message
router.post('/send',function(req, res, next) {
    let newMessage = new Message({
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        message: req.body.message,
        date: req.body.date,
        read: req.body.read
    });

    Message.sendMessage(newMessage, function(err, message) {
        if (err) {
            res.json({success:false, msg:"Failed to send message"});
        }
        else {
            res.json({success:true, msg:"Message sent!"});
        }
    });
});

//Receive messages
router.get('/receive/:emp_id', function(req, res, next) {
    Message.receiveMessages(req.params.emp_id, function(err, messages) {
        if (err) {
            throw err;
        }
        else {
            res.json(messages);
        }
    });
});

//Delete message
router.get('/delete/:id', function(req, res, next) {
    Message.deleteMessage(req.params.id, function(err, message) {
        if (err) {
            throw err;
        }
        else {
            res.json(message);
        }
    });
});

//Unread count
router.get('/unread/:emp_id', function(req, res, next) {
    Message.unread(req.params.emp_id, function(err, count) {
        if (err) {
            throw err;
        }
        else {
            res.json(count);
        }
    });
});

module.exports = router;