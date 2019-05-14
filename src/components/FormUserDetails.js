import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }  


  render() {
      const {values, handleChange} = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Registro de usuários" />
            <TextField 
                hintText="Primeiro nome"
                floatingLabelText="Nome"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
            />
            <br/>
            <TextField 
                hintText="Digite seu sobrenome"
                floatingLabelText="Sobrenome"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
            />
            <br/>
              <TextField 
                hintText="Digite seu email"
                floatingLabelText="E-mail"
                onChange={handleChange('email')}
                defaultValue={values.email}
            />
            <br/>
            <RaisedButton 
                label="Próximo"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
    button:{
        margin: 15
    }
}
export default FormUserDetails
