import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Login from './components/login'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import ActivityContainer from './containers/activity_container'


class App extends React.Component{

  
	// componentDidMount() {
	// 	fetch('http://localhost:3000/users')
	// 	.then(res => res.json())
	// 	.then(res => this.setState({ users: res }))
  // }


  render(){
    return (
      <div className="App">
        <Navbar />
        <Login/>
        <ActivityContainer/>
      </div>
    );
  }
}

export default App;
