import React from 'react';
import { connect } from 'react-redux'
// import { ButtonGroup } from "shards-react";
import { NavLink } from "react-router-dom"
import { Fade, Button, ButtonGroup } from "shards-react";
import { Card, ListGroup, Row, Col, Container} from 'react-bootstrap'
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
                <Row className="d-flex justify-content-center m-3">
                    <Col md={4}>
                        <Card className="m-3">
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
                                    <ButtonGroup horizontal>
                                        <Button onClick={this.toggle}>
                                            Show Friends
                                        </Button>
                                        <NavLink className="btn btn-primary" to='/editprofile'> Edit Profile</NavLink>
                                    </ButtonGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <NetCaloriesChart/>
                    </Col>

                    <Col md={2}>
                        <Fade in={this.state.visible}>
                            <Card className="m-2" id="userFollowing">
                                <Card.Body>
                                    <Card.Title>Friends You Follow</Card.Title>
                                        <Card.Text>
                                            <ListGroup>
                                                {this.props.userInfo.follows.map(follow => <ListGroup.Item>{follow.id}</ListGroup.Item>)}
                                            </ListGroup>
                                        </Card.Text>
                                </Card.Body>
                            </Card>   
                        </Fade>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-left m-1">
                    <Col md={4}>
                        <Card className="m-2" id="userCalorieInfo">
                            <Card.Body>
                                <Card.Title>Your BMR: {this.props.userInfo.special.basal_metabolic_rate ? this.props.userInfo.special.basal_metabolic_rate :"Enter your age, weight, and height to calculate your BMR!"}</Card.Title>
                                    <Card.Text>
                                        Daily Net Calories: {dailyNetCalories}<br/>
                                        Weekly Net Calories: {weeklyNetCalories}<br/>
                                        Monthly Net Calories: {monthlyNetCalories}<br/>
                                        Yearly Net Calories: {yearlyNetCalories}<br/>

                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <ActivityTypeChart />
                    </Col>
                    <Col md={4}>
                    <Card className="m-2" id="userCalorieInfo">
                            <Card.Body>
                                <Card.Title>Days left to do better this month!</Card.Title>
                                    <Card.Text>
                                      {this.props.userInfo.special.find_number_of_days_left_in_current_month}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> 
            </div>
            );

            
    }
}


let mapStateToProps = (state) => {
    return { userInfo: state.user.userInfo}
  }



export default connect(mapStateToProps)(Profile)