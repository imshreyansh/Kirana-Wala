import {combineReducers} from 'redux'
import handleError from './handleError'
import authenticateUser from './auth'
import designation from './designation'
export default combineReducers({
    handleError,
    authenticateUser,
    designation
})