const {Credential} = require('../../model/auth/credentials')
const { handler: { errorResponseHandler, successResponseHandler }, upload: { uploadAvatar }} = require('../../config')


exports.createUser = (req,res)=>{
    uploadAvatar(req,res, async (error)=>{
        if(error) errorResponseHandler(res,error,'Failed while adding user')
        try{
            const {mobile,name,designation} = JSON.parse(req.body.data)
            const addUser = new Credential({mobile,name,designation})
            addUser['avatar']=req.files[0]
            await addUser.save()
            successResponseHandler(res,addUser,'Added User Successfully')
        }
        catch(error){
            errorResponseHandler(res,error,'Failed while adding user')
        }
    })
}