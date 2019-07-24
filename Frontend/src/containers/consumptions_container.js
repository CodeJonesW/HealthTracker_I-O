import React from 'react';
import { connect } from 'react-redux'
import ConsumptionsChart from '../components/consumptions_chart'

class ConsumptionsContainer extends React.Component {


    render() { 
        return ( 
            <div className="consumptionContainer">
            <h4>Consumptions</h4>
            
                {this.props.userConsumptions ? this.props.userConsumptions.map(consumption => 
                    <p> {consumption.category} </p>
                ): null}
                <ConsumptionsChart/>
            </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userConsumptions: state.user.userInfo.consumptions, user: state.user.userInfo}
}

export default connect(mapStateToProps)(ConsumptionsContainer)