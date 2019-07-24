import React from 'react';
import { connect } from 'react-redux'
// import { ButtonGroup } from "shards-react";
// import { NavLink } from "react-router-dom"
import { Fade, Button } from "shards-react";
import { Card, ListGroup} from 'react-bootstrap'
import NetCaloriesChart from './net_calories_chart';
import ActivityTypeChart from './activities_type_chart'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          visible: false
        };
      }
    
      toggle() {
        this.setState({
          visible: !this.state.visible
        });
      }



    render() { 
        return ( 
            <div>
                <Card id="profileCard" style={{left:'100px'}}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{this.props.userInfo.name}'s Profile</Card.Title>
                        <Card.Text>
                            Username: {this.props.userInfo.username}<br/>
                            Email: {this.props.userInfo.email}<br/>
                            Age: {this.props.userInfo.age}<br/>
                            Gender: {this.props.userInfo.gender}<br/>
                            Height: {this.props.userInfo.height}<br/>
                            Weight: {this.props.userInfo.weight}<br/>
                        </Card.Text>
                        <div>
                        <Button onClick={this.toggle} className="mb-2">
                            Show Friends
                        </Button>
                        <Fade in={this.state.visible}>
                            <ListGroup>
                                <ListGroup.Item>Following Example</ListGroup.Item>
                                {/* {this.props.userInfo.follows.map(follow => <ListGroup.Item>follow.id</ListGroup.Item>)} */}
                            </ListGroup>
                        </Fade>
                        </div>
                    </Card.Body>
                </Card>

                <NetCaloriesChart />
                <ActivityTypeChart />
                
            </div>
            );

            
    }
}


let mapStateToProps = (state) => {
    return { userInfo: state.user.userInfo}
  }



export default connect(mapStateToProps)(Profile)