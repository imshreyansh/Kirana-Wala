import React,{Component} from 'react';
import './Auth.css'
import imageGirl from '../../assets/images/imageGirl.png'
import logo from '../../assets/images/logo.png'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {authenticateUser} from '../../actions/auth'
import {connect} from 'react-redux'
import user from '../../assets/images/user.png'
import {validation} from '../utils/validation'
import {handleError} from '../../actions/handleError'

class Auth extends Component{
    constructor(props){
        super(props)
        this.default={
            phone:'',
            user:true,
            phoneE:'',
            userImage:this.dataURLtoFile(user,'avatar')
        }
        this.state=this.default
    }

    onSelectDesignation = () =>{
        this.setState({
            user:!this.state.user
        })
    }

    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split('.'),
          mime = `image/${arr[2]}`,
          bstr = atob(arr[0]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
      }
    

    onSubmit = () =>{
        if(this.state.phone !=='' && this.state.phoneE===''){
            const obj = { 
                name:'',
                mobile:this.state.phone,
                designation:{
                    id:this.state.user ?'611e3a91d51a3b8689f40296' :'61162f83949ff314dc3fd4f5'
                }
            }
            const formData = new FormData()
            formData.append('avatar',user)
            formData.append('data',JSON.stringify(obj))
            
            this.props.dispatch(authenticateUser(formData))
        }else{
            this.props.dispatch(handleError({type:'error',error:this.state.phoneE === '' ? 'Empty Fields' : this.state.phoneE}))
        }
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
                    <input type="text" className="AuthPhoneInput" style={{borderBottomColor:'#b3e5fc'}}  value={this.state.phone} onChange={(e)=>this.setState(validation(e.target.value,'phone','text'))} placeholder="Enter 10 digit mobile number"/>
                    <div onClick={()=>this.onSubmit()} className="AuthGoButtonDiv">
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

function mapStateToProps(auth){
return{
    auth
}
}

export default connect(mapStateToProps)(Auth);