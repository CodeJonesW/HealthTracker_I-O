import React from 'react';
import { connect } from 'react-redux'
import ActivitiesChart from '../components/activities_chart'
import ActivityTypeChart from '../components/activities_type_chart'
class ActivityContainer extends React.Component {


    render() { 
        // console.log(this.props.userActivities)
        return (
            <div className="activityContainer">
            <h4>{this.props.user.name}'s Activities</h4>
                {/* {this.props.userActivities ? this.props.userActivities.map(activity => 
                    <p>Type: {activity.category}, Calories Burned:{activity.calories_burned}, Distance: {activity.distance}</p>
                ): null} */}
                <ActivitiesChart/>
                <ActivityTypeChart/>
            </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userActivities: state.user.userInfo.activities, user: state.user.userInfo}
}

export default connect(mapStateToProps)(ActivityContainer)