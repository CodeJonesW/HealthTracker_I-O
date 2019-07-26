import React from 'react';
import { connect } from 'react-redux'
import GoalsChart from '../components/goals_chart'
import { Card } from 'react-bootstrap'


class GoalContainer extends React.Component {

    render() { 
        return ( 
            <div className="activityContainer">
            <h4>Your Goals</h4>
                <GoalsChart/>
                <Card id="activeGoalsCard" style={{position: 'absolute', left:'850px', top: '100px', width: '300px'}}>
                    <Card.Body>
                        <Card.Title>Active Goals</Card.Title>
                            <Card.Text>
                            Distance: { this.props.goalStats.pending_goals.map(pendingGoal => pendingGoal.distance) }, Type: { this.props.goalStats.pending_goals.map(pendingGoal => pendingGoal.category) } 


                            </Card.Text>
                    </Card.Body>
                </Card> 
                {/* <Card id="completedGoalsCard" style={{position: 'absolute', left:'850px', top: '300px', width: '300px'}}>
                    <Card.Body>
                        <Card.Title>Completed Goals</Card.Title>
                            <Card.Text>
                                Distance: { this.props.goalStats.successful_goals.map(successfulGoal => successfulGoal.distance) }, Type: { this.props.goalStats.successful_goals.map(successfulGoal => successfulGoal.category) } 
                            </Card.Text>
                    </Card.Body>
                </Card>  */}
            </div>
         );
    }
}

let mapStateToProps = (state) => {
    return { userGoals: state.user.userInfo.goals, user: state.user.userInfo, goalStats: state.user.userInfo.goal_stats}
}

export default connect(mapStateToProps)(GoalContainer)