import React from 'react';
import { connect } from 'react-redux'

class ActivityContainer extends React.Component {

    render() { 
        console.log(this.props.activities)
        return ( 
            <h1>{this.props.activities}</h1>
         );
    }
}



let mapStateToProps = (state) => {
    return { activities: state.activity.activities}
}

// let connectorFunction = connect(mapStateToProps)
// let connectedActivityContainer = connectorFunction(ActivityContainer)

export default connect(mapStateToProps)(ActivityContainer)