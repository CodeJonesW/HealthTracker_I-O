import React from 'react';
import { connect } from 'react-redux'
import ActivitiesChart from '../components/activities_chart'
import ActivityTypeChart from '../components/activities_type_chart'
import { Button, ButtonGroup } from "shards-react";
import { Card, Row, Col, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom"


class ActivityContainer extends React.Component {
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
      let dailyNetCaloriesBurned = this.props.calories_burned ? this.props.calories_burned.daily : null
      let weeklyNetCaloriesBurned = this.props.calories_burned ? this.props.calories_burned.weekly : null
      let monthlyNetCaloriesBurned = this.props.calories_burned ? this.props.calories_burned.monthly : null
      let yearlyNetCaloriesBurned = this.props.calories_burned ? this.props.calories_burned.yearly : null

        return (
          <div>
            <Row className="d-flex justify-content-center m-3">
            
              <Col md={4}>
                  <Card className="m-3" id="activityMilesCard">
                        <Card.Body>
                            <Card.Title>Total Activity Miles</Card.Title>
                                <Card.Text>
                                  This week: {this.props.userInfo.special.activity_miles_this_week}
                                </Card.Text>
                        </Card.Body>
                  </Card>  
              </Col>

              <Col md={4}>
                <h4 className="m-3">Activities</h4>
                      <ButtonGroup vertical  
                      // style={{position: 'relative'}}
                      >
                              <NavLink className="btn btn-primary" to='/createactivity'> New Activity</NavLink>
                              <NavLink className="btn btn-primary" to='/editactivity'> Edit Activity</NavLink>
                              <Button className="btn btn-primary">Delete Activity</Button>
                      </ButtonGroup>
              </Col>

              <Col md={4}>
              <Card className="m-3"
              // style={{position: 'absolute', left:'850px', top: '100px', width: '300px'}}
              >
                      <Card.Body>
                          <Card.Title>Calories Burned</Card.Title>
                              <Card.Text>
                                  Today: {dailyNetCaloriesBurned}<br/>
                                  This Week: {weeklyNetCaloriesBurned}<br/>
                                  This Month: {monthlyNetCaloriesBurned}<br/>
                                  This Year: {yearlyNetCaloriesBurned}<br/>
                              </Card.Text>
                      </Card.Body>
                </Card>
              </Col>
            </Row>

              <Container>
                <Row>
                  <Col md={6}>
                    <ActivitiesChart/>
                  </Col>
                  <Col md={6}>
                    <ActivityTypeChart/>
                  </Col>
                </Row>
              </Container>
          </div>
         );
    }
}



let mapStateToProps = (state) => {
    return { userActivities: state.user.userInfo.activities, userInfo: state.user.userInfo, calories_burned: state.user.userInfo.calories_burned}
}

export default connect(mapStateToProps)(ActivityContainer)