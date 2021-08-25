import {ADD_VENDOR} from '../actions/actionTypes'

const initialState = {vendorData:[]}
export default function vendor(state=initialState,action){
    const {payload,type}=action
    switch(type){
        case ADD_VENDOR:
            return {
                ...state,
                vendorData:[...state.vendorData,payload]
            }

         default:
        return state
    }
}
