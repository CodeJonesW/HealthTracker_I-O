import React from 'react';
import { connect } from 'react-redux'
import GoalsChart from '../components/goals_chart'

class GoalContainer extends React.Component {


    render() { 
        return ( 
            <div className="activityContainer">
            <h4>Your Goals</h4>
                <GoalsChart/>
            </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userGoals: state.user.userInfo.goals, user: state.user.userInfo}
}

export default connect(mapStateToProps)(GoalContainer)