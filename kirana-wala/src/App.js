import React,{Component,Fragment} from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import SnackBar from './components/utils/SnackBar'
import {setItem,getItem} from './components/utils/localStorage'
import jwt from 'jsonwebtoken'
import Auth from './components/authorization/Auth'
import AdminDashboard from './components/admin/AdminDashboard'
import SideMenu from './components/common/SideMenu'
import TopMenu from './components/common/TopMenu'
import './App.css'
class App extends Component{

  loggedInUser = ()=>{
    try{
      let designation = jwt.decode(this.props.token).designation.name
      return designation
    }
    catch{
      return false
    }
}


  render(){
    return(
      <Router>
        <SnackBar/>
        {!this.loggedInUser() && this.loggedInUser()==='' ? 
      <Fragment>
        <Switch>
        <Route exact path="/" component={Auth}/>
          </Switch>
          </Fragment>
      :this.loggedInUser()==='Admin'?
      <Fragment>
        <div className="divideComponentOne">
          <TopMenu/>
        <div className="divideComponent">
            <SideMenu/>
      <Switch>
      <Route exact path="/" component={AdminDashboard}/>
        </Switch>
        </div>
        </div>
        </Fragment>
        :<Fragment>
          <Switch>
        <Route exact path="/" component={Auth}/>
          </Switch>
          </Fragment>}
      </Router>
    )
  }
}

function mapStateToProps(authToken){
  return{
    token:getItem('token'),
  }
}

export default connect(mapStateToProps)(App)