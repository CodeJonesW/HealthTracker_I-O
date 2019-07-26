import React, { Component } from 'react';
import { Form, FormInput, FormGroup, FormSelect } from "shards-react";
import { Button } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { fetchUser } from '../actions/user_actions'

class NutritionixForm extends Component {
    
    state = {
        redirect: null
    }

    handleSearchNutrionixFoods = (e) => {
        e.preventDefault()

        fetch('https://trackapi.nutritionix.com/v2/natural/nutrients',{
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type':'application/json', 'x-app-id':'acc5e7a4', 'x-app-key':'730daa51ab247ff687c34d9055c5e595', 'x-remote-user-id':'0' },
            body: JSON.stringify({
                "query": e.target.nutritionixSearch.value
            })
        })
        .then(res => res.json())
        .then(res => {
		  	if (res.foods[0]) {
                this.props.dispatch({type: "UPDATE_CONSUMPTION", foodArr: res.foods})
                
		  	}
		//   	else if(res.errors)
		//   		this.setState({ errors: res.errors })
          })
          e.target.reset()
    }

    render() { 
        return ( 
        
        <Form onSubmit={(e) => this.handleSearchNutrionixFoods(e)} style={{position: "absolute", top: '60px', width: 300, height: 550, margin: '20px'}}>
            {this.state.redirect}

            <FormGroup>
                <FormInput name="nutritionixSearch" id="#nutritionixSearch" placeholder="Search Nutrionix Foods!" />
            </FormGroup>
                <Button className="mb-2" type="submit">Submit</Button>
            </Form> );
    }
}
 
let mapStateToProps = (state) => {
    return { userInfo: state.userInfo}
  }


export default connect(mapStateToProps)(NutritionixForm)