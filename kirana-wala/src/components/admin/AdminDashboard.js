import React,{Component} from 'react'
import {connect} from 'react-redux'
import './AdminDashboard.css'
class AdminDashboard extends Component{
    render(){
        console.log('render Admin')
        return(
            <div className="admin-dashboard">
                <h1>Dashboard Admin</h1>
            </div>
        )
    }
}

function mapStateToProps(data){
    return{
        data
    }
}

export default connect(mapStateToProps)(AdminDashboard)