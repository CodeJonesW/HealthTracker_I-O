import React from "react";
import { Form, FormInput, FormGroup } from "shards-react";

export default class FormExample extends React.Component {

    handleSignIn = (e) => {
        e.preventDefault()
        console.log(e.target.email.value)

		if(e.target.email.value && e.target.password.value) {
			fetch('http://localhost:3000/login',{
		    method: 'POST',
		    headers: { Accept: 'application/json', 'Content-Type':'application/json' },
		    body: JSON.stringify({
                user: {
					email: e.target.email.value.toLowerCase(),
                    password: e.target.password.value
                }
		    })
		  })
          .then(res => res.json())
		  .then(res => {
		  	if (res.jwt) {
		  		localStorage.setItem('jwt_token', res.jwt)
		  		localStorage.setItem('healthTracker_Id', res.user.id)
		  		// this.setState({ redirect: <Redirect to='/' /> })
                  // this.props.logUser(true)
                  console.log(localStorage)
		  	}
		//   	else if(res.errors)
		//   		this.setState({ errors: res.errors })
		  })
		// 	e.target.password.value = ''
        }
        

    }
    
render() {
        return (
            <Form onSubmit={(e) => this.handleSignIn(e)}>
            <FormGroup >
                <label htmlFor="#email">Email</label>
                <FormInput name="email" id="#email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput name="password" type="password" id="#password" placeholder="Password" />
            </FormGroup>
            <button className="btn-primary" type="submit">Submit</button>
            </Form>
        );
    }
}