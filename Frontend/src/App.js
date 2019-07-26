import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import AccountContainer from './containers/account_container'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from './components/profile'
import ActivitiesPage from './components/activities_page'
import GoalsPage from './components/goals_page'
import ConsumptionsPage from './components/consumptions_page'
import ActivityForm from './components/activity_form'
import ConsumptionForm from './components/consumption_form'
import {fetchUser} from './actions/user_actions';

class App extends React.Component{

  
  componentDidMount(){
    if ( localStorage['jwt_token'] ) {
      fetchUser().then(res => {
        // console.log("this is it", res)
        if (res.user)
          this.props.dispatch({ type: 'UPDATE_USER', user: res.user })
      })
    }
}

  


  render(){
    return (
      <div className="App">
        <Navbar />
        {
          localStorage['jwt_token'] && !this.props.user.userInfo.id ? null :
            <Switch>
              <Route exact path="/profile" render={()=> localStorage.jwt_token ? <Profile/> : <Redirect to='/' /> }/>
              <Route exact path="/" render={()=> localStorage.jwt_token ? <Redirect to='/profile' /> : <AccountContainer/> } />
              <Route exact path='/activities' render={()=> <ActivitiesPage/> }/>
              <Route exact path='/goals' render={()=> <GoalsPage/> }/>
              <Route exact path='/consumptions' render={()=> <ConsumptionsPage/> }/>
              <Route exact path='/createactivity' render={()=> <ActivityForm/> }/>
              <Route exact path='/createconsumption' render={()=> <ConsumptionForm/> }/>
            </Switch>
        }
      </div>
    );
  }
}

  let mapStateToProps = (state) => {
    return { user: state.user}
  }



export default connect(mapStateToProps)(App)
