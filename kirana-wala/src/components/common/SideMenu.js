import React,{Component} from 'react'
import {connect} from 'react-redux'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Link} from 'react-router-dom'
import './Common.css'
class SideMenu extends Component{
    constructor(props){
        super(props)
        this.default ={
            showIndex:null,
            content:[{id:1,name:PersonAddIcon,elements:[{name:'Add Vendor',link:'add-vendor'},{name:'Approved',link:'approved-vendor'}]},{id:2,name:NaturePeopleIcon,elements:[{name:'Vendor'},{name:'Details'}]}]
        }
        this.state=this.default
    }

    onShowMenu = (i) =>{
        if(this.state.showIndex===i){
            this.setState({
                showIndex:null
            })
        }else{
            this.setState({
                showIndex:i
            })
        }
    }


    render(){
        const {showIndex,content} =this.state
        return(
            <div className="side-menu">
                <div className="side-menu-items">
                <div className="side-menu-item-item"> 
                <Link to={{pathname:`/`}} style={{textDecoration: "none"}}>
                    <DashboardIcon style={{color:'#fff',fontSize:'35px',cursor:'pointer'}} onClick={()=>this.onShowMenu(showIndex)}/>
                    </Link>
                    </div>
                  {content.map((d,i)=>{
                      return(
                    <div className="side-menu-item-popup">
                    <div className="side-menu-item-item"> 
                    <d.name style={{color:'#fff',fontSize:'35px',cursor:'pointer'}} onClick={()=>this.onShowMenu(i)}/>
                    </div>
                {showIndex ===i ? 
                    <div className="side-menu-item-popup-box-div">
                    <div className="side-menu-item-popup-box">
                   { content[showIndex].elements.map((data,index)=>{
                        return(
                            <Link className="side-menu-item-popup-box-item-div" to={{pathname:`/${data.link}`}} style={{textDecoration: "none"}}>
                            <span className="side-menu-item-popup-box-text" onClick={()=>this.onShowMenu(showIndex)}>{index+1}. {data.name}</span>
                            </Link>
                        )
                    })}
                    </div>
                    </div>
                    :null}
                    </div>
                      )
                  })}
                    
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

export default connect(mapStateToProps)(SideMenu)