import React, { Component } from 'react';
import { Form, FormInput, FormGroup, FormSelect } from "shards-react";
import { Button } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { fetchUser } from '../actions/user_actions'

class EditActivityForm extends Component {
    
    state = {
        redirect: null
    }

    handleEditActivity = (e) => {
        e.preventDefault()

            fetch(`http://localhost:3000/activities/${e.target.activityId.value}`,{
            method: 'PATCH',
            headers: { Accept: 'application/json', 'Content-Type':'application/json', 'Authorization': `Bearer ${localStorage.jwt_token}` },
            body: JSON.stringify({
                activity : {
                    category: e.target.category.value.toLowerCase(),
                    calories_burned: e.target.calories_burned.value,
                    distance: e.target.distance.value,
                    user_id: this.props.userInfo.id,
                }
            })
        })
        .then(res => res.json())
        fetchUser().then(res => {
            this.props.dispatch({ type: 'UPDATE_USER', user: res.user })
        })
        this.setState({ redirect: <Redirect to='/activities' /> })
        // }
        //   	else if(res.errors)
        //   		this.setState({ errors: res.errors })
        //   })
        // 	e.target.reset
        // }
    }

    render() { 
        return ( 
        
        <Form onSubmit={(e) => this.handleEditActivity(e)} style={{position: "relative", width: 550, height: 550, margin: '20px'}}>
            {this.state.redirect}

            <h3>Edit Activity</h3>
            <FormGroup >
                <FormSelect name="activityId">
                    {this.props.userInfo.activities.map(activity => <option value={activity.id}>Id: {activity.id}, Type: {activity.category}, Calories Burned: {activity.calories_burned ? activity.calories_burned :'Nil'} Distance: {activity.distance ? activity.distance : 'Nil'}</option>)}
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
                <label htmlFor="#calories_burned">Calories Burned</label>
                <FormInput type="number" name="calories_burned" id="#calories_burned" placeholder="# Calories Burned" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="#distance">Distance</label>
                <FormInput name="distance" min="1" max="500"  id="#distance" placeholder="# of Miles"   />
            </FormGroup>
            
                <Button className="mb-2" type="submit">Submit</Button>
            </Form> );
    }
}
 
let mapStateToProps = (state) => {
    return { userInfo: state.user.userInfo}
  }


export default connect(mapStateToProps)(EditActivityForm)