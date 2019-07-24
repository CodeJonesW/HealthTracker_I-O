import React from 'react';
import { connect } from 'react-redux'
import ConsumptionsChart from '../components/consumptions_chart'
import { Fade, Button, ButtonGroup } from "shards-react";
import { NavLink } from "react-router-dom"



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
                {/* {this.props.userConsumptions ? this.props.userConsumptions.map(consumption => 
                    <p> {consumption.category} </p>
                ): null} */}
                <ConsumptionsChart/>
            </div>
         );
    }
}


let mapStateToProps = (state) => {
    return { userConsumptions: state.user.userInfo.consumptions, user: state.user.userInfo}
}

export default connect(mapStateToProps)(ConsumptionsContainer)