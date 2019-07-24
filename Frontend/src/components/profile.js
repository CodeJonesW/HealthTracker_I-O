import React from 'react';
import { connect } from 'react-redux'
// import { ButtonGroup } from "shards-react";
// import { NavLink } from "react-router-dom"
import { Fade, Button } from "shards-react";
import { Card, ListGroup} from 'react-bootstrap'
import NetCaloriesChart from './net_calories_chart';
import ActivityTypeChart from './activities_type_chart'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          visible: false
        };
      }
    
      toggle() {
        this.setState({
          visible: !this.state.visible
        });
      }



    render() { 
        let dailyNetCalories = this.props.userInfo.net_calories ? this.props.userInfo.net_calories.daily : null
        let weeklyNetCalories = this.props.userInfo.net_calories ? this.props.userInfo.net_calories.weekly : null
        let monthlyNetCalories = this.props.userInfo.net_calories ? this.props.userInfo.net_calories.monthly : null
        let yearlyNetCalories = this.props.userInfo.net_calories ? this.props.userInfo.net_calories.yearly : null

        return ( 
            <div>
                <Card id="profileCard" style={{left:'100px'}}>
                    <Card.Body>
                        <Card.Title>{this.props.userInfo.name}'s Profile</Card.Title>
                        <Card.Text>
                            Username: {this.props.userInfo.username}<br/>
                            Email: {this.props.userInfo.email}<br/>
                            Age: {this.props.userInfo.age}<br/>
                            Gender: {this.props.userInfo.gender}<br/>
                            Height: {this.props.userInfo.height}<br/>
                            Weight: {this.props.userInfo.weight}<br/>
                        </Card.Text>
                        <div>
                            <Button onClick={this.toggle} className="mb-2">
                                Show Friends
                            </Button>
                        <Fade in={this.state.visible}>
                            <ListGroup>
                                <ListGroup.Item>Following Example</ListGroup.Item>
                                {/* {this.props.userInfo.follows.map(follow => <ListGroup.Item>follow.id</ListGroup.Item>)} */}
                            </ListGroup>
                        </Fade>
                        </div>
                    </Card.Body>
                </Card>

                <Card id="userCalorieInfo" style={{left:'100px', top: '400px', width: '300px'}}>
                    <Card.Body>
                        <Card.Title>Your Net Calories</Card.Title>
                            <Card.Text>
                                Daily Net Calories: {dailyNetCalories}<br/>
                                Weekly Net Calories: {weeklyNetCalories}<br/>
                                Monthly Net Calories: {monthlyNetCalories}<br/>
                                Yearly Net Calories: {yearlyNetCalories}<br/>

                            </Card.Text>
                    </Card.Body>
                </Card>

                <NetCaloriesChart />
                <ActivityTypeChart />
                
            </div>
            );

            
    }
}


let mapStateToProps = (state) => {
    return { userInfo: state.user.userInfo}
  }



export default connect(mapStateToProps)(Profile)