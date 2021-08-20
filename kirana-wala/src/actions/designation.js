import {GET_DESIGNATION_BY_ID} from './actionTypes'
import axios from 'axios'
import {URL} from '../config/helpers'
import {handleError} from './handleError'
export const getDesignationById =(id)=>dispatch=>{
    axios.get(`${URL}/api/designation/getDesignationById/${id}`)
    .then(res=>{
        if(res){
            dispatch({type:GET_DESIGNATION_BY_ID, payload:res.data.response})
       }
    })
    .catch(error=>{
        dispatch(handleError(error))
        dispatch({type:GET_DESIGNATION_BY_ID,payload:null})
    })
}