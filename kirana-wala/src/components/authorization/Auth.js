import React,{Component} from 'react';
import './Auth.css'
import imageGirl from '../../assets/images/imageGirl.png'
import logo from '../../assets/images/logo.png'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
class Auth extends Component{
    constructor(props){
        super(props)
        this.default={
            phone:'',
            user:true
        }
        this.state=this.default
    }

    onSelectDesignation = () =>{
        this.setState({
            user:!this.state.user
        })
    }

    render(){
        return(
            <div className="AuthMain">
                <div className="AuthDistribution">
                <div className="AuthTwoImage">
                    <img src={imageGirl} className="AuthTwoImageTag"/>
                </div>
                <div className="AuthContainer">
                    <div className="AuthLogoMain">
                        <img src={logo} className="AuthLogo"/>
                    </div>
                    <div className="AuthLoginContainer">
                        <div className="AuthLoginContainerTwo">
                        <PhoneAndroidIcon className="AuthLoginMobileIcon"/>
                    <input className="AuthPhoneInput" style={{borderBottomColor:'#b3e5fc'}}  value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} placeholder="Enter 10 digit mobile number"/>
                    <div className="AuthGoButtonDiv">
                        <ArrowForwardIcon style={{color:'#fff',cursor:'pointer'}}/>
                    </div>
                        </div>
                       <span className="AuthSelectionOr">OR</span>
                    <span onClick={()=>this.onSelectDesignation()} className="AuthSelectionRegister">{this.state.user ? 'Login as Super Market' : 'Login as Customer'}</span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Auth;