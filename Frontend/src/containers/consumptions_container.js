import React from 'react';
import { connect } from 'react-redux'
import ConsumptionsChart from '../components/consumptions_chart'
import { Button, ButtonGroup } from "shards-react";
import { NavLink } from "react-router-dom"
import { Card, Row, Col } from 'react-bootstrap'
import NutritionixForm from "../components/nutritionix_foods_form"


class ConsumptionsContainer extends React.Component {


    render() { 
        return ( 

            <div className="consumptionContainer">
                <Row className="d-flex justify-content-center m-3">
                    <Col md={4}>
                        <Card className="m-4" id="consumptionsCard">
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
                    </Col>

                    <Col md={4}>
                        <h4>Consumptions</h4>
                            <ButtonGroup vertical  className="m-1">
                                    <NavLink className="btn btn-primary" to='/createconsumption'> New Consumption</NavLink>
                                    <NavLink className="btn btn-primary" to='/editconsumption'> Edit Consumption</NavLink>
                                    <Button className="mb-2">Delete Consumption</Button>
                            </ButtonGroup>        
                    </Col>

                    <Col md={4}>
                        <Card className="m-1" id="recentConsumptionsCard">
                            <Card.Body>
                                <Card.Title>Recent Consumptions</Card.Title>
                                    <Card.Text>
                                        Add  todays consumptions?
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center m-3">
                    <Col md={6}>
                        <ConsumptionsChart className="m-3"/>
                    </Col>

                    <Col md={6}>
                        <NutritionixForm className="m-2"/>
                    </Col>
                </Row> 
            </div>
         );
    }
}


let mapStateToProps = (state) => {
    return { userConsumptions: state.user.userInfo.consumptions, userInfo: state.user.userInfo}
}

export default connect(mapStateToProps)(ConsumptionsContainer)