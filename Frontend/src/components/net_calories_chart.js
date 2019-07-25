import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux'
import { ButtonGroup, Button } from "shards-react";

class NetCaloriesChart extends Component {
    state = {
        switchLabels: true
    }

    switch = () => {
        this.setState({switchLabels: !this.state.switchLabels})
    }


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
    //             set.backgroundColor = this.setGradientColor(canvas, colors[i]);
    //             set.borderColor = "white";
    //             set.borderWidtth = 2;
    //         })

    //     }
    //     return data
    // }

    render() { 
        // let consumption_calories = this.props.consumptions && this.props.consumptions.map(consumption => consumption.calories_intaken)
        // let calories_burned = this.props.activities && this.props.activities.map(activity => activity.calories_burned)
        let burned_labels = this.props.activities && this.props.activities.map(activity => activity.category)
        let consumption_types = this.props.consumptions && this.props.consumptions.map(consumption => consumption.category)

        let lineDataSets =
        [
            {
                label: "Calorie Consumption",
                backgroundColor: 'rgba(77, 19, 209, 0.6)',
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
                            labels: this.state.switchLabels ? burned_labels : consumption_types,
                            datasets: lineDataSets
                        }}
                    />}
                </div>
                    <Button style={{position: 'absolute', top: '120px', left: '1040px'}}onClick={this.switch}>Label Type</Button>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { consumptions: state.user.userInfo.consumptions, activities: state.user.userInfo.activities, userInfo: state.user.userInfo}
}

export default connect(mapStateToProps)(NetCaloriesChart)