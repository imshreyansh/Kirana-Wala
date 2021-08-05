import React,{Component,Fragment} from 'react'
import Auth from './components/authorization/Auth'

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