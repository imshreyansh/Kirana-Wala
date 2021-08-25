import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../AdminDashboard.css'
import {addVendor} from '../../../actions/vendor'

class AddVendor extends Component{
    constructor(props){
        super(props)
        this.default={
            vendorName:'',
            vendorMobile:'',
            storeName:'',
            storeMobile:'',
            documents:[],
            logo:''
        }
        this.state=this.default
    }

    onImage=(e,type)=>{
        if(type==='single'){
            this.setState({
                logo:e.target.files[0]
            })
        }else{
            const arr=[]
        Object.entries(e.target.files).map(d=>{
            arr.push(d[1])
        })
    this.setState({
    documents:arr
    })  
        }
        
  }


    onSubmit = ()=>{
        const {vendorMobile,storeMobile,vendorName,storeName,documents,logo} = this.state

        const formData = new FormData()
        const obj = {
            mobile:vendorMobile,
            storeContact:storeMobile,
            name:vendorName,
            storeName,
            designation:{id:'61162f83949ff314dc3fd4f5'}
        }

        formData.append('data',JSON.stringify(obj))

        documents.map(d=>{
            formData.append('documents',d)
        })

        formData.append('storeLogo',logo)

        this.props.dispatch(addVendor(formData))
    }
    render(){
        return(
            <div className="admin-dashboard">
                <div className="add-vendor-main">
                    <div className="add-vendor-vendor-details">
                        <span className="add-vendor-vendor-details-heading">Add Vendor</span>
                    </div>
                    <div className="add-vendor-vendor-input-forms-div">
                    <input type="text"  className="add-vendor-input" style={{borderBottomColor:'#004c6e'}} placeholder="Vendor Name" value={this.state.vendorName} onChange={(e)=>this.setState({vendorName:e.target.value})}/>
                    <input type="text"  className="add-vendor-input" style={{borderBottomColor:'#004c6e'}} placeholder="Vendor Mobile" value={this.state.vendorMobile} onChange={(e)=>this.setState({vendorMobile:e.target.value})}/>
                    </div>
                    <div className="add-vendor-vendor-input-forms-div">
                    <input type="text"  className="add-vendor-input" style={{borderBottomColor:'#004c6e'}} placeholder="Store Name" value={this.state.storeName} onChange={(e)=>this.setState({storeName:e.target.value})}/>
                    <input type="text"  className="add-vendor-input" style={{borderBottomColor:'#004c6e'}} placeholder="Store Mobile" value={this.state.storeMobile} onChange={(e)=>this.setState({storeMobile:e.target.value})}/>
                    <input type="file" multiple={true}  className="add-vendor-input" style={{borderBottomColor:'#004c6e'}} placeholder="Store Documents"  onChange={(e)=>this.onImage(e,'multi')}/>
                    <input type="file"  className="add-vendor-input" style={{borderBottomColor:'#004c6e'}} placeholder="Store Logo"  onChange={(e)=>this.onImage(e,'single')}/>
                    </div>
                    <div>
                    </div>
                    <div className="add-vendor-submit">
                        <span className="add-vendor-submit-span" onClick={()=>this.onSubmit()}>Submit</span>
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

export default connect(mapStateToProps)(AddVendor)