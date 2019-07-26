import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux'
import { ButtonGroup, Button } from "shards-react";

class NetCaloriesChart extends Component {



    render() { 

        let lineDataSets =
        [
            {
                label: "Calorie Consumption",
                backgroundColor: 'rgba(77, 19, 209, 0.4)',
                data: this.props.userInfo.special.calories_consumed
            },
            {
                label: "Calories Burned",
                backgroundColor: "rgba(207, 0, 15, 0.6)",
                data: this.props.userInfo.special.calories_burned
            }
        ]


        return (
            <div>  
                
                <div style={{position: "absolute", top: '90px', left: '500px', width: 500, height: 550}}>
                    { this.props.consumptions &&
                    <Line
                        options={{
                                responsive: true
                            }}
                        data={{
                            labels: this.props.userInfo.special.last_weeks_days.map(day => day.slice(6)),
                            datasets: lineDataSets
                        }}
                    />}
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { consumptions: state.user.userInfo.consumptions, activities: state.user.userInfo.activities, userInfo: state.user.userInfo}
}

export default connect(mapStateToProps)(NetCaloriesChart)