import React, { Component } from 'react';
import { Form, FormInput, FormGroup, FormSelect } from "shards-react";
import { Button } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { fetchUser } from '../actions/user_actions'
import SplashGoalDiv from './splash_goal_form'

class EditGoalForm extends Component {
    
    state = {
        redirect: null
    }

    handleEditGoal = (e) => {
        e.preventDefault()

            fetch(`http://localhost:3000/goals/${e.target.goalId.value}`,{
            method: 'PATCH',
            headers: { Accept: 'application/json', 'Content-Type':'application/json', 'Authorization': `Bearer ${localStorage.jwt_token}` },
            body: JSON.stringify({
                goal: {
                    category: e.target.category.value.toLowerCase(),
                    calories_to_burn: e.target.calories_to_burn.value,
                    distance: e.target.distance.value,
                    completed: e.target.completed.value,
                    user_id: this.props.userInfo.id,
                }
            })
        })
        .then(res => res.json())
        fetchUser().then(res => {
            this.props.dispatch({ type: 'UPDATE_USER', user: res.user })
        })
        this.setState({ redirect: <Redirect to='/goals' /> })
        // }
        //   	else if(res.errors)
        //   		this.setState({ errors: res.errors })
        //   })
        // 	e.target.reset
        // }
    }

    render() { 
        return ( 
        <SplashGoalDiv>
            <Form onSubmit={(e) => this.handleEditGoal(e)} style={{position: "relative", width: 550, height: 550, margin: '20px'}}>
                {this.state.redirect}

                <FormGroup >
                    <FormSelect name="goalId">
                        {this.props.userInfo.goals.map(goal => <option value={goal.id}>Id: {goal.id}, Status: {goal.completed ? "Complete": "Pending"}, Type: {goal.category}, Calories to Burn: {goal.calories_to_burn ? goal.calories_to_burn :'Nil'} Distance: {goal.distance ? goal.distance : 'Nil'}</option>)}
                    </FormSelect>
                </FormGroup>

                <FormGroup >
                    <FormSelect name="category">
                        <option value="run">Run</option>
                        <option value="walk">Walk</option>
                        <option value="bike">Bike</option>
                        <option value="swim">Swim</option>
                    </FormSelect>
                </FormGroup>

                <FormGroup>
                    <FormInput type="number" min="0" max="5000" name="calories_to_burn" id="#calories_to_burn" placeholder="# Calories to Burn" />
                </FormGroup>

                <FormGroup>
                    <FormInput required="true" type="number" step="0.1" min="0" max="200"  name="distance" min="0" max="500"  id="#distance" placeholder="# of Miles"   />
                </FormGroup>

                <FormGroup>
                    <FormSelect name="completed">
                        <option value="false">Pending</option>
                        <option value="true">Complete</option>
                    </FormSelect>
                </FormGroup>
                
                    <Button className="mb-2" type="submit">Submit Edit</Button>
                </Form>
            </SplashGoalDiv> );
    }
}
 
let mapStateToProps = (state) => {
    return { userInfo: state.user.userInfo}
  }


export default connect(mapStateToProps)(EditGoalForm)