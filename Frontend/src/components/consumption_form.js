import React, { Component } from 'react';
import { Form, FormInput, FormGroup } from "shards-react";
import { Button } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { fetchUser } from '../actions/user_actions';
import NutritionixForm from './nutritionix_foods_form'
import SplashConsumptionDiv from './splash_consumption_form'

class ConsumptionForm extends Component {
    
    state = {
        redirect: null
    }

    handleCreateConsumption = (e) => {
        e.preventDefault()

            fetch('http://localhost:3000/consumptions',{
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type':'application/json', 'Authorization': `Bearer ${localStorage.jwt_token}` },
            body: JSON.stringify({
                consumption: {
                    user_id: this.props.user.userInfo.id,
                    category: e.target.category.value,
                    calories_intaken: e.target.calories_intaken.value,
                }
            })
        })
        .then(res => res.json())
        
        fetchUser().then(res => {
              this.props.dispatch({ type: 'UPDATE_USER', user: res.user })
          })

        this.setState({ redirect: <Redirect to='/consumptions' /> })
        // }
        //   	else if(res.errors)
        //   		this.setState({ errors: res.errors })
        //   })
        // 	e.target.reset
        // }
    }

    render() { 
        return ( 
        <SplashConsumptionDiv>
        <Form onSubmit={(e) => this.handleCreateConsumption(e)} style={{position: "relative", width: 300, height: 550, margin: '20px'}}>
            {this.state.redirect}
            <FormGroup >
                <FormInput required="true" type="text" name="category" id="#category" placeholder="Food/Beverage" />
            </FormGroup>
            <FormGroup>
                {/* <label htmlFor="#calories_intaken">Calories Consumed</label> */}
                <FormInput required="true" type="number" name="calories_intaken" id="#calories_intaken" placeholder="Calories Consumed" />
            </FormGroup>
                <Button className="mb-2" type="submit">Submit</Button>
        </Form>
        </SplashConsumptionDiv> );
    }
}
 
let mapStateToProps = (state) => {
    return { user: state.user}
  }


export default connect(mapStateToProps)(ConsumptionForm)