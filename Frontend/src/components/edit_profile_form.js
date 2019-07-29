import React, { Component } from 'react';
import { Form, FormInput, FormGroup, FormSelect } from "shards-react";
import { Button } from "shards-react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { fetchUser } from '../actions/user_actions'

class EditProfileForm extends Component {
    
    state = {
        redirect: null
    }

    handleEditProfile = (e) => {
        e.preventDefault()

            fetch(`http://localhost:3000/users/${this.props.userInfo.id}`,{
            method: 'PATCH',
            headers: { Accept: 'application/json', 'Content-Type':'application/json', 'Authorization': `Bearer ${localStorage.jwt_token}` },
            body: JSON.stringify({
                user : {
                    email: e.target.email.value.toLowerCase(),
                    password: e.target.password.value,
                    username: e.target.username.value,
                    name: e.target.name.value,
                    age: e.target.age.value,
                    weight: e.target.weight.value,
                    gender: e.target.gender.value,
                    height: e.target.height.value
                }
            })
        })
        .then(res => res.json())
        fetchUser().then(res => {
            this.props.dispatch({ type: 'UPDATE_USER', user: res.user })
        })
        this.setState({ redirect: <Redirect to='/profile' /> })
        // }
        //   	else if(res.errors)
        //   		this.setState({ errors: res.errors })
        //   })
        // 	e.target.reset
        // }
    }

    render() { 
        return ( 
            <Form onSubmit={(e) => this.handleEditProfile(e)} 
            style={{position: "relative", width: 300, height: 550, margin: '20px'}}
            >
            {this.state.redirect}
            <h3>Edit User</h3>
                <FormGroup >
                    <label htmlFor="#username">Username</label>
                    <FormInput name="username" id="#username" placeholder="Username" defaultValue={this.props.userInfo.username} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput name="password" id="#password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#name">Name</label>
                    <FormInput name="name" id="#name" placeholder="Name" defaultValue={this.props.userInfo.name} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#email">Email</label>
                    <FormInput name="email" id="#email" placeholder="Email" defaultValue={this.props.userInfo.email} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#age">Age</label>
                    <FormInput name="age" id="#age" placeholder="Age" defaultValue={this.props.userInfo.age} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#gender">Gender</label>
                    <FormInput name="gender" id="#gender" placeholder="Gender" defaultValue={this.props.userInfo.gender}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#height">Height</label>
                    <FormInput name="height" id="#height" placeholder="Height" defaultValue={this.props.userInfo.height}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#weight">Weight</label>
                    <FormInput name="weight" id="#weight" placeholder="Weight" defaultValue={this.props.userInfo.weight}/>
                </FormGroup>
                    <Button className="mb-2" type="submit">Submit</Button>
                </Form>);
    }
}
 
let mapStateToProps = (state) => {
    return { userInfo: state.user.userInfo}
  }


export default connect(mapStateToProps)(EditProfileForm)