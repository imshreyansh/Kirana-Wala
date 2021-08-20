export const setItem = (key,item)=>{
    if (!localStorage) return;

    try{
        return localStorage.setItem(key, JSON.stringify(item))
    }catch(error){
        console.log(error,'Error While Adding Item to storage')
    }
}

export const getItem = (key)=>{
    if (!localStorage) return;

    try{
        return  JSON.parse(localStorage.getItem(key))
    }catch(error){
        console.log(error,'Error While getting Item to storage')
    }
}

export const removeItem = (key)=>{
    if (!localStorage) return;

    try{
         return localStorage.removeItem(key)
    }catch(error){
        console.log(error,'Error While removing Item from storage')
    }
}

export const clearStorage = ()=>{
    if (!localStorage) return;

    try{
        return localStorage.clear()
    }catch(error){
        console.log(error,'Error While clearing all Item from storage')
    }
}