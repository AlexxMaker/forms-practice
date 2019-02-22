import React, { Component } from 'react';
import FormFields from '../../src/widgets/Forms/formFields'

class User extends Component {

    state = {
        formData: {
            name:{
                element:'input',
                value:'',
                label:true,
                labelText:'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your Name'
                }
            },

            lastname:{
                element:'input',
                value:'',
                label:true,
                labelText:'Lastname',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your Lastname'
                    }
            
            }
        }
    }

    updateForm = (newState) => {
        console.log(newState)
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>

                <FormFields 
                    formData={this.state.formData}
                    change={(newState) => this.updateForm(newState)}
                
                />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default User;