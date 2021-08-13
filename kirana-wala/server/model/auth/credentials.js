const mongoose = require('mongoose');
const Schema =mongoose.Schema


const credential = new Schema({
    mobile:{
        type:Number
    },
    name:{
        type:String
    },
    avatar:Object,
    designation:{
        type:Schema.Types.ObjectId,
        ref:"Designation"
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})


const Credential = mongoose.model('Credential',credential)

exports.Credential=Credential