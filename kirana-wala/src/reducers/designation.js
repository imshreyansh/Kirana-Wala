import {GET_DESIGNATION_BY_ID} from '../actions/actionTypes'

const initialState = {}
export default function designation(state=initialState,action){
    const {type,payload} = action
    switch(type){
        case GET_DESIGNATION_BY_ID:
            return payload

         default:
            return state
    }
}