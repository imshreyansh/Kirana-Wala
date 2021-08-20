import {AUTHENTICATION} from './actionTypes'
import axios from 'axios'
import {URL} from '../config/helpers'
import {handleError} from './handleError'
import {setItem} from '../components/utils/localStorage'

export const authenticateUser = (data)=>dispatch=>{
    axios.post(`${URL}/api/credential/createAndLoginUser`,data)
    .then(res=>{
        if(res){
            setItem('token',res.data.response)
            dispatch({type:AUTHENTICATION,payload:res.data.response})
        }
    })
    .catch(error=>{
        dispatch(handleError({type:'error',error:error.message}))
        dispatch({type:AUTHENTICATION,payload:null})
    })
}