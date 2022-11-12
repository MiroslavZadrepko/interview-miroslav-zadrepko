const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        text: String,
        date: {
            type: Date, default: Date.now
        }
    }
)

module.exports = mongoose.model('Todo', todoSchema);