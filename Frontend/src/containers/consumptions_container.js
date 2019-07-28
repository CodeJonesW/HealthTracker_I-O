import React from 'react';
import { connect } from 'react-redux'
import ConsumptionsChart from '../components/consumptions_chart'
import { Button, ButtonGroup } from "shards-react";
import { NavLink } from "react-router-dom"
import { Card } from 'react-bootstrap'
import NutritionixForm from "../components/nutritionix_foods_form"


class ConsumptionsContainer extends React.Component {


    render() { 
        return ( 
            <div className="consumptionContainer">
            <h4>Consumptions</h4>
                    <ButtonGroup vertical  className="activitiesButtonGroup" style={{position: 'relative'}}>
                            <NavLink className="btn btn-primary" to='/createconsumption'> New Consumption</NavLink>
                            <NavLink className="btn btn-primary" to='/createconsumption'> Edit Consumption</NavLink>
                            <Button className="mb-2">Delete Consumption</Button>
                    </ButtonGroup>    
                              
                <ConsumptionsChart/>
                <NutritionixForm/>

                <Card id="consumptionsCard" style={{position: 'absolute', left:'850px', top: '100px', width: '300px'}}>
                    <Card.Body>
                        <Card.Title>Calories Consumed</Card.Title>
                            <Card.Text>
                                Today: {this.props.userInfo.calories_consumed.daily}<br/>
                                This Week: {this.props.userInfo.calories_consumed.weekly}<br/>
                                This Month: {this.props.userInfo.calories_consumed.monthly}<br/>
                                This Year: {this.props.userInfo.calories_consumed.yearly}<br/>
                            </Card.Text>
                    </Card.Body>
                </Card> 
                
                <Card id="recentConsumptionsCard" style={{position: 'absolute', left:'850px', top: '300px', width: '300px'}}>
                    <Card.Body>
                        <Card.Title>Recent Consumptions</Card.Title>
                            <Card.Text>
                                Add  todays consumptions?
                            </Card.Text>
                    </Card.Body>
                </Card> 
            </div>
         );
    }
}


let mapStateToProps = (state) => {
    return { userConsumptions: state.user.userInfo.consumptions, userInfo: state.user.userInfo}
}

export default connect(mapStateToProps)(ConsumptionsContainer)