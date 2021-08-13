const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designation = new Schema({
    name:{
        type:String
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Designation = mongoose.model('Designation',designation)

exports.Designation=Designation