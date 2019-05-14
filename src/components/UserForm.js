import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
    
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
    
    //processo para o proximo passo
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    }

      //processo para voltar um passo
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    }
    

    //lidando com os campos
    handleChange = input => e => {
      this.setState({[input]: e.target.value});
    }

    
  }
 
    render() {
    const {step} = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio }

    switch (key) {
      case 1:
          return(
            <FormUserDetails 
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          )
      case 2:
          return <h1>FormUserDetails</h1>
      case 3:
          return <h1>Confirm</h1>
      case 4:    
          return <h1>Success</h1>  
    }
  }
}

export default UserForm
