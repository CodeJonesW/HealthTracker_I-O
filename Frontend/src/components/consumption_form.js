import React, { Component } from 'react';
import { Form, FormInput, FormGroup } from "shards-react";
import { Fade, Button, ButtonGroup } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";

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
        .then(console.log)
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
        
        <Form onSubmit={(e) => this.handleCreateConsumption(e)} style={{position: "relative", width: 300, height: 550, margin: '20px'}}>
            {this.state.redirect}

            <h3>New Consumption</h3>
            <FormGroup >
                <label htmlFor="#category">Type</label>
                <FormInput name="category" id="#category" placeholder="Food/Beverage" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="#calories_intaken">Calories Consumed</label>
                <FormInput name="calories_intaken" id="#calories_intaken" placeholder="Calories Consumed" />
            </FormGroup>
                <Button className="mb-2" type="submit">Submit</Button>
        </Form> );
    }
}
 
let mapStateToProps = (state) => {
    return { user: state.user}
  }


export default connect(mapStateToProps)(ConsumptionForm)