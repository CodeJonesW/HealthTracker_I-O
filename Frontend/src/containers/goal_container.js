import React from 'react';
import { connect } from 'react-redux'
import GoalsChart from '../components/goals_chart'
import { Card, Row, Col } from 'react-bootstrap'
import { Button, ButtonGroup } from "shards-react";
import { NavLink } from "react-router-dom"



class GoalContainer extends React.Component {
    render() { 
        return ( 
            <div>
                <Row className="d-flex justify-content-center m-3">
                    <Col md={4}>
                        <Card className="m-3" id="activeGoalsCard">
                            <Card.Body>
                                <Card.Title>Active Goals</Card.Title>
                                    <Card.Text>
                                    {this.props.goalStats.pending_goals.map(pendingGoal => <p>Distance: {pendingGoal.distance}, Type: {pendingGoal.category}</p> )}


                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="m-3">
                        <h4>Goals</h4>
                        <ButtonGroup vertical 
                        // style={{position: 'absolute', top: '200px', left: '650px'}}
                        >
                                    <NavLink className="btn btn-primary" to='/creategoal'> New Goal</NavLink>
                                    <NavLink className="btn btn-primary" to='/editgoal'> Edit Goal</NavLink>
                                    <Button className="mb-2">Delete Goal</Button>
                        </ButtonGroup>
                    </Col>
                   
                </Row>
                <Row className="d-flex justify-content-center m-3">
                    <Col md={4}>
                        <Card className="m-3">
                            <Card.Body>
                                <Card.Title>Goal Comments</Card.Title>
                                    <Card.Text>
                                        Stuff
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="m-3">
                        <GoalsChart className="m-3"/>
                    </Col>
                </Row>
            </div>
         );
    }
}

let mapStateToProps = (state) => {
    return { userGoals: state.user.userInfo.goals, user: state.user.userInfo, goalStats: state.user.userInfo.goal_stats}
}

export default connect(mapStateToProps)(GoalContainer)