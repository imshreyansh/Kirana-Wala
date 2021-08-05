import {ERROR} from '../actions/actionTypes'
 const initialState=''
export default function handleError(state=initialState,action){
const {type,payload} = action
switch(type){
    case ERROR:
        return payload

     default:
        return state
}
}