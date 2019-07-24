import React from 'react';
import { connect } from 'react-redux'
import ActivitiesChart from '../components/activities_chart'
import ActivityTypeChart from '../components/activities_type_chart'
import { Button, ButtonGroup } from "shards-react";

import { NavLink } from "react-router-dom"

class ActivityContainer extends React.Component {
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
        return (
            <div className="activityContainer">
            <h4>Your Activities</h4>
            
                    <ButtonGroup vertical  className="activitiesButtonGroup" style={{position: 'relative'}}>
                            <NavLink className="btn btn-primary" to='/createactivity'> New Activity</NavLink>
                            <NavLink className="btn btn-primary" to=''> Edit Activity</NavLink>
                            <Button className="mb-2">Delete Activity</Button>
                    </ButtonGroup>
            <ActivitiesChart/>
                
            </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userActivities: state.user.userInfo.activities, user: state.user.userInfo}
}

export default connect(mapStateToProps)(ActivityContainer)