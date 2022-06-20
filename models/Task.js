const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'input name'],
        trim: true,
        maxlenght: [20, '20 Char'],
    },
    completed:{
        type:Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)