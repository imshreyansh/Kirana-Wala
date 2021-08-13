const {Designation} = require('../../model/master/designation')
const { handler: { errorResponseHandler, successResponseHandler }} = require('../../config')


exports.createDesigntion = async(req,res)=>{
    try{
        const {designation} = req.body
        const designationCreate = new Designation({name:designation})
        await designationCreate.save()
        successResponseHandler(res,designationCreate,'Successfully Created Designation')
    }
    catch(error){
        errorResponseHandler(res,error,'Something went wrong')
    }
}

exports.getAllDesignations = async(req,res)=>{
    try{
        const getAll = await Designation.find({})
        successResponseHandler(res,getAll,'Successfully got all designations')
    }
    catch(error){
        errorResponseHandler(res,error,'Something went wrong')
    }
}

exports.getDesignationById = async(req,res)=>{
    try{
        const getById = await Designation.findOne({_id:req.params.id})
        successResponseHandler(res,getById,'Successfully got designation by ID')
    }
    catch(error){
        errorResponseHandler(res,error,'Something went wrong')
    }
}

exports.updateDesignation = async(req,res)=>{
    try{
        const update = await Designation.findOneAndUpdate({_id:req.body.id},req.body,{new:true})
        successResponseHandler(res,update,'Successfully updated designation')
    }
    catch(error){
        errorResponseHandler(res,error,'Something went wrong')
    }
}