import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Common.css'
class TopMenu extends Component{
    render(){
        return(
            <div className="top-menu">

                </div>
        )
    }
}

function mapStateToProps(data){
    return{
        data
    }
}

export default connect(mapStateToProps)(TopMenu)