import {ADD_VENDOR} from './actionTypes'
import axios from 'axios'
import {URL} from '../config/helpers'
import {handleError} from './handleError'

export const addVendor = (data)=>dispatch=>{
    axios.post(`${URL}/api/vendor/addVendor`,data)
    .then(res=>{
        dispatch({type:ADD_VENDOR,payload:res.data.response})
        dispatch(handleError({type:'success',error:'Added Vendor Successfully'}))
    })
    .catch(err=>{
        dispatch({type:ADD_VENDOR,payload:null})
        dispatch(handleError({type:'success',error:err.message}))
    })
}