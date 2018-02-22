const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const MessageSchema = mongoose.Schema(
    {
        to: {
            type: Number
        },
        from: {
            type: Number
        },
        subject: {
            type: String
        },
        message: {
            type: String
        },
        date: {
            type: Date
        },
        read: {
            type: Boolean
        }
    }
);

const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.sendMessage = function(newMessage, callback) {
    newMessage.save(callback);
}

module.exports.receiveMessages = function(emp_id, callback) {
    const query = {to: +emp_id};
    Message.aggregate([
        { $match: query },
        {
            $lookup:
            {
                from: "employees",
                localField: "from",
                foreignField: "_id",
                as: "from"
            }
        },
        {
            $sort: { date: -1 }
        }
    ], callback);

}

module.exports.deleteMessage = function(id, callback) {
    Message.findByIdAndRemove(id, callback);
}