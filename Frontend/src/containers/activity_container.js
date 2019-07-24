import React from 'react';
import { connect } from 'react-redux'
import ActivitiesChart from '../components/activities_chart'
import ActivityTypeChart from '../components/activities_type_chart'
class ActivityContainer extends React.Component {


    render() {
        return (
            <div className="activityContainer">
            <h4>Your Activities</h4>
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