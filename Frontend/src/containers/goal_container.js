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
                                {/* Daily: {dailyNetCaloriesBurned}<br/>
                                Weekly: {weeklyNetCaloriesBurned}<br/>
                                Monthly: {monthlyNetCaloriesBurned}<br/>
                                Yearly: {yearlyNetCaloriesBurned}<br/> */}

                            </Card.Text>
                    </Card.Body>
                </Card> 
                <Card id="completedGoalsCard" style={{position: 'absolute', left:'850px', top: '300px', width: '300px'}}>
                    <Card.Body>
                        <Card.Title>Completed Goals</Card.Title>
                            <Card.Text>
                                {/* Daily: {dailyNetCaloriesBurned}<br/>
                                Weekly: {weeklyNetCaloriesBurned}<br/>
                                Monthly: {monthlyNetCaloriesBurned}<br/>
                                Yearly: {yearlyNetCaloriesBurned}<br/> */}

                            </Card.Text>
                    </Card.Body>
                </Card> 
            </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userGoals: state.user.userInfo.goals, user: state.user.userInfo}
}

export default connect(mapStateToProps)(GoalContainer)