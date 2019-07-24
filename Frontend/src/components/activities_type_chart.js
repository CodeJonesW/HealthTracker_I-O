import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux'

class ActivityTypeChart extends Component {
    // setGradientColor = (canvas, color) => {
    //     const ctx = canvas.getContext('2d')
    //     const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    //     gradient.addColorStop(0, color);
    //     gradient.addColorStop(0.95, "rgba (133, 122, 144, 0.5)");
    //     return gradient
    // }
    
    // getChartData = canvas => {
    //     const data = this.state.data
    //     if (data.datasets) {
    //         let colors = ["rgba (255, 0, 255, 0.75)", "rgba (0, 255, 0, 0.75)" ]
    //         data.datasets.forEach((set, i) => {
    //             set.backgroundColor = 'blue';
    //             set.borderColor = "white";
    //             set.borderWidtth = 2;
    //         })

    //     }
    //     return data
    // }



    render() { 
        let activity_amounts = this.props.activity_types && [this.props.activity_types.runs.length, this.props.activity_types.walks.length, this.props.activity_types.swims.length, this.props.activity_types.bikes.length ]
        return ( 
            <div style={{position: "absolute", top: '315px', left: '500px', width: 600, height: 450, margin: '2em'}}>
                <h6>Activity Types</h6>
                <Doughnut
                    options={{
                            responsive: true,
                            rotation: -0.5,
                            animateRotate: true
                        }}
                    data={{
                        labels: ['run','walk','swim','bike'],
                        datasets: [
                            {
                                label: "Activity Type",
                                backgroundColor: ["blue","purple", "red", "green"],
                                data: activity_amounts,
                                drawBorder: true
                            }
                        ]
                    }}
                />
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { userActivities: state.user.userInfo.activities, user: state.user.userInfo, activity_types: state.user.userInfo.activity_types}
}

export default connect(mapStateToProps)(ActivityTypeChart)