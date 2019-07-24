import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux'

class GoalsChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                labels: [1,2,3,4,5,6],
                datasets: [
                    {
                        label: "Calories to Burn",
                        backgroundColor: "rgba(255, 0, 0, 0.8)",
                        // data: this.props.userActivities ? this.props.userActivities.map(activity =>  activity.calories_burned): null
                        data: [200, 300, 50, 200, 110, 170]
                    },
                    {
                        label: "Goal Distance",
                        backgroundColor: "rgba(0,128,0, 0.8)",
                        // data: this.props.userActivities ? this.props.userActivities.map(activity =>  activity.distance): null
                        data: [12, 30, 5, 7, 9, 15]
                    }
                ]
            }
        }
    }

    // setGradientColor = (canvas, color) => {
    //     const ctx = canvas.getContext('2d')
    //     const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    //     gradient.addColorStop(0, color);
    //     gradient.addColorStop(0.95, "rgba (133, 122, 144, 0.5)");
    //     return gradient
    // }
    
    getChartData = canvas => {
        const data = this.state.data
        if (data.datasets) {
            let colors = ["rgba (255, 0, 255, 0.75)", "rgba (0, 255, 0, 0.75)" ]
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidtth = 2;
            })

        }
        return data
    }

    render() { 

        let barDataSets = this.props.userGoals && 
        [
            {
                label: "Calories To Burn",
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                data: this.props.userGoals.map(goal =>  goal.calories_to_burn)
            },
            {
                label: "Goal Distance",
                backgroundColor: "rgba(0,128,0, 0.8)",
                data: this.props.userGoals.map(goal =>  parseFloat(goal.distance.split(' ')[0]))
            }
        ]

        return ( 
            <div style={{position: "relative", width: 600, height: 550}}>
                <h4>Your Goals</h4>
                {/* <h4>{console.log(this.props.userInfo.goal_stats)}</h4> */}
                <Bar
                    options={{
                            responsive: true
                        }}
                    data={{
                        labels: [1,2,3,4,5,6],
                        datasets: barDataSets
                    }}
                />
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { userGoals: state.user.userInfo.goals, user: state.user.userInfo, completed_goals: state.user.userInfo.goal_stats}
}

export default connect(mapStateToProps)(GoalsChart)