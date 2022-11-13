const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        date: {
            type: Date, 
            default: Date.now
        },
        done:{
            type:Boolean,
            required: true,
            default: false
        }
    }
)

module.exports = mongoose.model('Todo', todoSchema);