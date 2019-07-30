import React, { Component } from 'react';
import { Form, FormInput, FormGroup, FormSelect } from "shards-react";
import { Button } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { fetchUser } from '../actions/user_actions'
import SplashConsumptionDiv from './splash_consumption_form'
 

class EditConsumptionForm extends Component {
    
    state = {
        redirect: null
    }

    handleEditConsumption = (e) => {
        e.preventDefault()

            fetch(`http://localhost:3000/consumptions/${e.target.consumptionId.value}`,{
            method: 'PATCH',
            headers: { Accept: 'application/json', 'Content-Type':'application/json', 'Authorization': `Bearer ${localStorage.jwt_token}` },
            body: JSON.stringify({
                consumption : {
                    category: e.target.category.value.toLowerCase(),
                    calories_intaken: e.target.calories_intaken.value,
                    user_id: this.props.userInfo.id
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
            <Form onSubmit={(e) => this.handleEditConsumption(e)} 
            style={{position: "relative", width: 550, height: 550, margin: '20px'}}
            >
                {this.state.redirect}

                {/* <h3>Edit Consumption</h3> */}
                <FormGroup >
                    <FormSelect name="consumptionId">
                        {this.props.userInfo.consumptions.map(consumption => <option value={consumption.id}>Id: {consumption.id}, Type: {consumption.category}, Calories Consumed: {consumption.calories_intaken ? consumption.calories_intaken :'Nil'} </option>)}
                    </FormSelect>
                </FormGroup>

                <FormGroup >
                    <FormInput  name="category" id="#category" placeholder="Consumption Type" />
                </FormGroup>

                <FormGroup>
                    {/* <label htmlFor="#calories_intaken">Calories Consumed</label> */}
                    <FormInput type="number" name="calories_intaken" id="#calories_intaken" placeholder="# Calories Consumed" />
                </FormGroup>
                    <Button className="mb-2" type="submit">Submit Edit</Button>
            </Form>
        </SplashConsumptionDiv>
             );
    }
}
 
let mapStateToProps = (state) => {
    return { userInfo: state.user.userInfo}
  }


export default connect(mapStateToProps)(EditConsumptionForm)