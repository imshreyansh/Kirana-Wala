import React,{Component,Fragment} from 'react'
import Auth from './components/authorization/Auth'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import SnackBar from './components/utils/SnackBar'
class App extends Component{
  render(){
    return(
      <Fragment>
        <Auth/>
      </Fragment>
    )
  }
}

export default App