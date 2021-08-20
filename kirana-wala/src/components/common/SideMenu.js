import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Common.css'
class SideMenu extends Component{
    render(){
        return(
            <div className="side-menu">

                </div>
        )
    }
}

function mapStateToProps(data){
    return{
        data
    }
}

export default connect(mapStateToProps)(SideMenu)