import React from 'react';
import { connect } from 'react-redux'
import { Button, ButtonGroup } from "shards-react";
import { NavLink } from "react-router-dom"

class Profile extends React.Component {
    render() { 
        // console.log("log in profile component", this.props.userInfo)
        return ( 
            <div>
                <br/>
                <h3>{this.props.userInfo.name}'s Profile </h3>
                <p>Username: {this.props.userInfo.username}</p>
                <p>Email: {this.props.userInfo.email}</p>
                <p>Age: {this.props.userInfo.age}</p>
                <p>Gender: {this.props.userInfo.gender}</p>
                <p>Height: {this.props.userInfo.height}</p>
                <p>Weight: {this.props.userInfo.weight}</p>
                

            
                
                <ButtonGroup vertical>
                    <NavLink className="btn btn-primary" to='/activities'> Activities</NavLink>
                    <Button>Goals</Button>
                    <Button>Consumptions</Button>
                </ButtonGroup>
            </div>
            );

            
    }
}


let mapStateToProps = (state) => {
    return { userInfo: state.user.userInfo}
  }



export default connect(mapStateToProps)(Profile)