import React, { Component } from 'react';
import { Form, FormInput, FormGroup, FormSelect } from "shards-react";
import { Button, Fade } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { fetchUser } from '../actions/user_actions'
import { Card, ListGroup} from 'react-bootstrap'


class NutritionixForm extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          visible: false,
          redirect: null
        };
      }
    
      toggle() {
        this.setState({
          visible: !this.state.visible
        });
      }

    // fix the redirect none currently upon the search
    // do i need to persist the information through refresh for consumptions?
    // not if i plan to have the user to chose to save that to the backend when looking up the search information 
    // and save as a consumption


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
        this.setState({ redirect: <Redirect to='/consumptions' /> })
        this.toggle()

		//   	else if(res.errors)
		//   		this.setState({ errors: res.errors })
          })
          e.target.reset()
    }

    render() { 
        return ( 
        <div>
        <Form onSubmit={(e) => this.handleSearchNutrionixFoods(e)} style={{position: "absolute", top: '60px', width: 300, height: 550, margin: '20px'}}>
            {this.state.redirect}

            <FormGroup>
                <FormInput name="nutritionixSearch" id="#nutritionixSearch" placeholder="Search Nutrionix Foods!" />
            </FormGroup>
                <Button className="mb-2" type="submit">Submit</Button>
            </Form> 

            <Fade in={this.state.visible}>
                    <Card id="nutritionixSearchInfoCard" style={{position: 'relative', left:'100px', top: '100px', width: '200px'}}>
                        <Card.Body>
                            <Card.Title>Search Results</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        {/* {this.props.consumptions.map}<ListGroup.Item>info</ListGroup.Item> */}
                                        <ListGroup.Item>{this.props.consumptions[0] ? this.props.consumptions[0]['food_name']:null}</ListGroup.Item> 
                                    </ListGroup>
                                </Card.Text>
                                <Button onClick={this.toggle} className="mb-2">
                                    Close
                                </Button>
                        </Card.Body>
                    </Card>   
                </Fade>
        </div>
            );

        
    }
}
 
let mapStateToProps = (state) => {
    return { userInfo: state.userInfo, consumptions: state.consumption.consumptions}
  }


export default connect(mapStateToProps)(NutritionixForm)