export const validation = (value,variable,type)=>{
    let arr={}
if(type==='text'){
    if(value ===''){
        arr ={[`${variable}E`]:'Empty feild',[`${variable}`]:value}
    }else{
        arr = {[`${variable}E`]:'',[`${variable}`]:value}
    }
}
return {...arr}
}