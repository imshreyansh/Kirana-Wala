import React,{Component} from 'react'
import {connect} from 'react-redux'
import logoTwo from '../../assets/images/logoTwo.png'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {Link,withRouter} from 'react-router-dom'
import {logout} from '../../actions/auth'
import './Common.css'
class TopMenu extends Component{

    onLogout = () =>{
        this.props.dispatch(logout())
        setTimeout(() => {
            this.props.history.push('/')
        },1000)
    }

    render(){
        return(
            <div className="top-menu">
                <div className="top-menu-elements">
                    <div className="top-menu-elements-element-one">
                    <img src={logoTwo} className="logoImageTwo"/>
                    </div>
                    <div className="top-menu-elements-element-two">
                        <PowerSettingsNewIcon style={{color:'#fff',marginTop:'auto',marginBottom:'auto',cursor:'pointer'}} onClick={()=>this.onLogout()}/>
                    </div>
                </div>
                </div>
        )
    }
}

function mapStateToProps(data){
    return{
        data
    }
}

export default (connect(mapStateToProps)(withRouter(TopMenu)))