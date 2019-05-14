import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUPersonalDetails extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }  
   back = e => {
      e.preventDefault();
      this.props.prevStep();
  }   

  render() {
      const {values, handleChange} = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Detalhes pessoais" />
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
    );
  }
}
const styles={
    button:{
        margin: 15
    }
};
export default FormPersonalDetails
