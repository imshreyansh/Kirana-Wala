const mongoose = require('mongoose');
const Schema =mongoose.Schema
const jwt = require('jsonwebtoken')
const { SECRET } = require('../../config')

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

credential.methods.generateToken = function(){
    let token =  jwt.sign({
        id:this._id.toString(),
        mobile:this.mobile,
        avatar:this.avatar,
        designation:this.designation,
        name:this.name
    }, SECRET,
    { expiresIn: 60 * 60 * 24 })
return token
}


const Credential = mongoose.model('Credential',credential)

exports.Credential=Credential