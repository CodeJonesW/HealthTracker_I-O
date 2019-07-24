import React, { Component } from 'react';
import { Form, FormInput, FormGroup } from "shards-react";
import { Fade, Button, ButtonGroup } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
class ActivityForm extends Component {
    
    state = {
        redirect: null
    }

    handleCreateActivity = (e) => {
        e.preventDefault()

            fetch('http://localhost:3000/activities',{
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type':'application/json', 'Authorization': `Bearer ${localStorage.jwt_token}` },
            body: JSON.stringify({
                activity: {
                    category: e.target.category.value.toLowerCase(),
                    calories_burned: e.target.calories_burned.value,
                    distance: e.target.distance.value,
                    user_id: this.props.user.userInfo.id,
                }
            })
        })
        .then(res => res.json())
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
        
        <Form onSubmit={(e) => this.handleCreateActivity(e)} style={{position: "relative", width: 300, height: 550, margin: '20px'}}>
            {this.state.redirect}

            <h3>New Activity</h3>
            <FormGroup >
                <label htmlFor="#category">Category</label>
                <FormInput name="category" id="#category" placeholder="Category" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="#calories_burned">Calories Burned</label>
                <FormInput name="calories_burned" id="#calories_burned" placeholder="Calories Burned" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="#distance">Distance</label>
                <FormInput name="distance"  id="#distance" placeholder="Distance" />
            </FormGroup>
                <Button className="mb-2" type="submit">Submit</Button>
            </Form> );
    }
}
 
let mapStateToProps = (state) => {
    return { user: state.user}
  }


export default connect(mapStateToProps)(ActivityForm)