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
     back = e => {
      e.preventDefault();
      this.props.prevStep();
  }  

  render() {
       const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Por favor confirme seus dados" />
            <List>
            <ListItem
                primaryText="Seu nome"
                secondaryText={firstName}
            />
    
            <ListItem
                primaryText="Sobrenome"
                secondaryText={lastName}
            />
            
            <ListItem
                    primaryText="Seu email"
                    secondaryText={email}
                />
             <ListItem
                    primaryText="Emprego"
                    secondaryText={occupation}
                 />
            <ListItem
                    primaryText="Sua cidade"
                    secondaryText={city}
            />   
            <ListItem
                    primaryText="Descrição"
                    secondaryText={bio}
            />   
            
            </List><br />
            <RaisedButton 
                label="Confirmar & Continuar"
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
    );
  }
}
const styles = {
    button:{
        margin: 15
    }
}
export default Confirm
