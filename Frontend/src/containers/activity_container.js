import React from 'react';
import { connect } from 'react-redux'
import ActivitiesChart from '../components/activities_chart'
import ActivityTypeChart from '../components/activities_type_chart'
import { Button, ButtonGroup } from "shards-react";
import { Card } from 'react-bootstrap'
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
      let dailyNetCaloriesBurned = this.props.calories_burned ? this.props.calories_burned.daily : null
      let weeklyNetCaloriesBurned = this.props.calories_burned ? this.props.calories_burned.weekly : null
      let monthlyNetCaloriesBurned = this.props.calories_burned ? this.props.calories_burned.monthly : null
      let yearlyNetCaloriesBurned = this.props.calories_burned ? this.props.calories_burned.yearly : null

        return (
            <div className="activityContainer">
            <h4>Your Activities</h4>
            
                    <ButtonGroup vertical  className="activitiesButtonGroup" style={{position: 'relative'}}>
                            <NavLink className="btn btn-primary" to='/createactivity'> New Activity</NavLink>
                            <NavLink className="btn btn-primary" to='/createactivity'> Edit Activity</NavLink>
                            <Button className="mb-2">Delete Activity</Button>
                    </ButtonGroup>
            <ActivitiesChart/>
            <ActivityTypeChart/>
            <Card id="activityCaloriesBurnedCard" style={{position: 'absolute', left:'850px', top: '100px', width: '300px'}}>
                    <Card.Body>
                        <Card.Title>Calories Burned</Card.Title>
                            <Card.Text>
                                Today: {dailyNetCaloriesBurned}<br/>
                                This Week: {weeklyNetCaloriesBurned}<br/>
                                This Month: {monthlyNetCaloriesBurned}<br/>
                                This Year: {yearlyNetCaloriesBurned}<br/>

                            </Card.Text>
                    </Card.Body>
                </Card> 
            </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userActivities: state.user.userInfo.activities, user: state.user.userInfo, calories_burned: state.user.userInfo.calories_burned}
}

export default connect(mapStateToProps)(ActivityContainer)