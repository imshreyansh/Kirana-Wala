import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../AdminDashboard.css'
class AddVendor extends Component{
    render(){
        console.log('render Admin')
        return(
            <div className="admin-dashboard">
                <div className="add-vendor-main">
                    <div className="add-vendor-vendor-details">
                        <span className="add-vendor-vendor-details-heading">Add Vendor</span>
                    </div>
                    <div className="add-vendor-vendor-input-forms-div">
                    <input type="text"/>
                        
                    </div>
                    <div>
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