import React from 'react';
import { connect } from 'react-redux'
import { Button, ButtonGroup } from "shards-react";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
    render() { 
        // console.log("log in profile component", this.props.userInfo)
        return ( 
            <div>
                <h3>{this.props.userInfo.name}'s Profile </h3>
                <p>Age: {this.props.userInfo.age}</p>
                <p>Username: {this.props.userInfo.username}</p>
                <p>Gender: {this.props.userInfo.gender}</p>
                <p>Height: {this.props.userInfo.height}</p>
                <p>Weight: {this.props.userInfo.weight}</p>

                {/* <h4>Activities</h4>
                {this.props.userInfo.activities ? this.props.userInfo.activities.map(activity => 
                <p>{activity.calories_burned}</p>): null} */}
                
                <ButtonGroup vertical>
                    {/* <Button onClick={<Redirect to='/activities' />}>Activities</Button> */}
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