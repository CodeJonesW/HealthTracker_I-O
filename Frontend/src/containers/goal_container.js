import React from 'react';
import { connect } from 'react-redux'
import GoalsChart from '../components/goals_chart'
import { Card } from 'react-bootstrap'
import { Button, ButtonGroup } from "shards-react";
import { NavLink } from "react-router-dom"



class GoalContainer extends React.Component {
    render() { 
        return ( 
            <div className="goalContainer">
                <h4>Your Goals</h4>
            <GoalsChart/>
                <Card id="activeGoalsCard" style={{position: 'absolute', left:'850px', top: '100px', width: '300px'}}>
                    <Card.Body>
                        <Card.Title>Active Goals</Card.Title>
                            <Card.Text>
                             {this.props.goalStats.pending_goals.map(pendingGoal => <p>Distance: {pendingGoal.distance}, Type: {pendingGoal.category}</p> )}


                            </Card.Text>
                    </Card.Body>
                </Card>
                
                <ButtonGroup vertical  className="goalsButtonGroup" style={{position: 'absolute', top: '200px', left: '650px'}}>
                            <NavLink className="btn btn-primary" to='/creategoal'> New Goal</NavLink>
                            <NavLink className="btn btn-primary" to='/editgoal'> Edit Goal</NavLink>
                            <Button className="mb-2">Delete Goal</Button>
                </ButtonGroup>
            </div>
         );
    }
}

let mapStateToProps = (state) => {
    return { userGoals: state.user.userInfo.goals, user: state.user.userInfo, goalStats: state.user.userInfo.goal_stats}
}

export default connect(mapStateToProps)(GoalContainer)