import {AUTHENTICATION} from '../actions/actionTypes'

const initialState = {}
export default function authenticateUser(state=initialState,action){
    const {type,payload} = action
    switch(type){
        case AUTHENTICATION:
            return payload

         default:
            return state
    }
}