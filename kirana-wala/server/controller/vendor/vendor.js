const {Vendor} = require('../../model/vendor/vendor')
const {Credential} = require('../../model/auth/credentials')
const {Designation} = require('../../model/master/designation')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar }} = require('../../config')

exports.addVendor =  (req,res)=>{
uploadAvatar(req,res,async(error)=>{
    if(error) errorResponseHandler(res,error,'Failed while adding user')
    try{
        const {mobile,name,designation,storeName,storeContact} = JSON.parse(req.body.data)
        const check = await Credential.findOne({mobile:mobile})
        if(check) errorResponseHandler(res,'User Already Exist','User Already Exist')
        const getDesignationById = await Designation.findOne({_id:designation.id})
        const objDesignation = {
            id:designation.id,
            name:getDesignationById.name
        }
        const cred = new Credential({name,mobile,designation:objDesignation})
        cred['avatar']=req.files[0]
        const vend = new Vendor({storeName,storeContact})
        vend['storeLogo'] =req.files[1]
        vend['documents']=req.files[3]
        await cred.save()
        await vend.save()
        const populateVend = vend.populate('credential')
        successResponseHandler(res,populateVend,'Added User Successfully')
    }
    catch(error){
        errorResponseHandler(res,error,'Failed while adding user')
    }
})
}