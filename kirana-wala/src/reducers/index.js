import {combineReducers} from 'redux'
import handleError from './handleError'
import authenticateUser from './auth'
import designation from './designation'
import vendor from './vendor'
export default combineReducers({
    handleError,
    authenticateUser,
    designation,
    vendor
})