import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Confirm extends Component {
    continue = e => {
      e.preventDefault();
      //processo do formulario//
      this.props.nextStep();
    }  

  render() {
       const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Por favor confirme seus dados" />
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
            <TextField 
                hintText="Área de atuação"
                floatingLabelText="Emprego"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
            />
            <br/>
            <TextField 
                hintText="Qual é sua cidade?"
                floatingLabelText="Cidade"
                onChange={handleChange('city')}
                defaultValue={values.city}
            />
            <br/>
              <TextField 
                hintText="Fale sobre você"
                floatingLabelText="Biografia"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
            />
            <br/>
            <RaisedButton 
                label="Próximo"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
             <RaisedButton 
                label="Voltar"
                primary={false}
                style={styles.button}
                onClick={this.back}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Confirm
