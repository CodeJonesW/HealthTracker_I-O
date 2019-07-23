import React from 'react';
import { connect } from 'react-redux'
import GoalsChart from '../components/goals_ chart'

class GoalContainer extends React.Component {


    render() { 
        return ( 
            <div className="activityContainer">
            <h4>Your Goals</h4>
                {this.props.userGoals ? this.props.userGoals.map(goal => 
                    <p>Completed: {goal.completed ? 'Complete!': 'Not yet!'}, Calories to Burn:{goal.calories_to_burn}, Distance: {goal.distance} Category: {goal.category}</p>
                ): null}
                <GoalsChart/>
            </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userGoals: state.user.userInfo.goals, user: state.user.userInfo}
}

export default connect(mapStateToProps)(GoalContainer)