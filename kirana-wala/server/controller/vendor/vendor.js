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
        let documents = []
        let storeLogo=''
        req.files.map(d=>{
            if(d.fieldname ==='documents'){
                documents.push(d)
            }else if(d.fieldname==='storeLogo'){
                storeLogo = d
            }
        })
        // cred['avatar']=req.files[0]
        await cred.save()
        const vend = new Vendor({storeName,storeContact})
        vend['storeLogo'] =storeLogo
        vend['documents']=documents
        vend["credential"] = cred._id
        await vend.save()
        const getVend = await Vendor.findOne({_id:vend._id}).populate('credential')
        successResponseHandler(res,getVend,'Added User Successfully')
    }
    catch(error){
        errorResponseHandler(res,error,'Failed while adding user')
    }
})
}