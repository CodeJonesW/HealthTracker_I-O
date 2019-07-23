import React from 'react';
import { connect } from 'react-redux'
import ActivitiesChart from '../components/activities_chart'
class ActivityContainer extends React.Component {


    render() { 
        console.log(this.props.userActivities)
        return ( 
            <div className="activityContainer">
            <h4>Activities</h4>
                {this.props.userActivities ? this.props.userActivities.map(activity => 
                    <p>Type: {activity.category}, Calories Burned:{activity.calories_burned}, Distance: {activity.distance}</p>
                ): null}
                <ActivitiesChart/>
            </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userActivities: state.user.userInfo.activities}
}

export default connect(mapStateToProps)(ActivityContainer)