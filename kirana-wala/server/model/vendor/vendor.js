const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vendor = new Schema({
    credential:{
        type:Schema.Types.ObjectId,
        ref:"Credential"
    },
    documents:Array,
    storeName:{
        type:String
    },
    storeContact:{
        type:Number
    },
    storeLogo:Object,
    status:{
        type:String,
        enum:["Pending","Approved","Rejected"],
        default:"Pending"
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Vendor = mongoose.model('Vendor',vendor)

exports.Vendor=Vendor