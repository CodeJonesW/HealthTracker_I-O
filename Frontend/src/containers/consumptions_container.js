import React from 'react';
import { connect } from 'react-redux'
import ConsumptionsChart from '../components/consumptions_chart'

class ConsumptionsContainer extends React.Component {


    render() { 
        return ( 
            <div className="consumptionContainer">
            <h4>Consumptions</h4>
                    <ButtonGroup vertical  className="activitiesButtonGroup" style={{position: 'relative'}}>
                            <NavLink className="btn btn-primary" to='/createconsumption'> New Activity</NavLink>
                            <NavLink className="btn btn-primary" to='/createconsumption'> Edit Activity</NavLink>
                            <Button className="mb-2">Delete Activity</Button>
                    </ButtonGroup>              
                {/* {this.props.userConsumptions ? this.props.userConsumptions.map(consumption => 
                    <p> {consumption.category} </p>
                ): null} */}
                <ConsumptionsChart/>
            </div>
         );
    }
}

createconsumption

let mapStateToProps = (state) => {
    return { userConsumptions: state.user.userInfo.consumptions, user: state.user.userInfo}
}

export default connect(mapStateToProps)(ConsumptionsContainer)