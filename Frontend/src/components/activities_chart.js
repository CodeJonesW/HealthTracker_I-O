import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux'
import { Button } from "shards-react";

class ActivitiesChart extends Component {
        // state = {
        //     show_weekly_calories_burned: true
        // }
            // state shows weekly vs monthly calories burned per day ^^

            // switchState = () => {
            //     this.setState({calories_burned: !this.state.calories_burned})
            //     console.log(this.state.calories_burned)
            // }


    render() { 
        let barDataSets = this.props.userActivities && 
        [
            {
                label: "Calories Burned",
                backgroundColor: "green",
                // data: this.props.userActivities.map(activity =>  activity.calories_burned)
                data: this.props.userInfo.special.calories_burned.map(burned => burned)
            },
            {
                label: "Activity Distance in Miles",
                backgroundColor: "purple",
                data: this.props.userActivities.map(activity =>  parseFloat(activity.distance.split(' ')[0]))
            }
        ]
        // fix the distance to be for each day ^^^
        return ( 
            <div>
                <h6>Weekly Burned Calories by Day</h6>
                { this.props.userActivities &&
                <Bar
                    options={{
                            responsive: true
                        }}
                    data={{
                        labels: this.props.userInfo.special.last_weeks_days.map(day => day.slice(6)),
                        datasets: barDataSets
                    }}
                />}
                {/* <Button onClick={this.switchState}>Monthly/Weekly</Button> */}
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { userActivities: state.user.userInfo.activities, userInfo: state.user.userInfo}
}

export default connect(mapStateToProps)(ActivitiesChart)