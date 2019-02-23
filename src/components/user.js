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
                },
                validation: {
                    required:true,
                    minLen:5
                },
                valid:false,
                touched:false,
                validationMessage:''
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
                    },
                validation: {
                    required:true,
                    minLen:5
                    },
                valid:false,
                touched:false,
                validationMessage:''
            
            },

            message:{
                element:'textarea',
                value:'',
                label:true,
                labelText:'Message',
                config: {
                    name: 'message_input',
                    rows:4,
                    cols:36
                    },
                validation: {
                    required:false,
                    },
                valid:true

            },
            age: {
                element:'select',
                value:'',
                label:true,
                labelText:'Age',
                config: {
                    name: 'age_input',
                    options:[
                        {val:'1', text: '10-20'},
                        {val:'2', text: '20-30'},
                        {val:'3', text: '30-40'},
                        {val:'4', text: '40-50'},
                        {val:'5', text: '50+'}
                        ]
                    },
                validation: {
                    required:false,
                    },
                valid:true
            },
            gender: {
                element:'select',
                value:'',
                label:true,
                labelText:'Gender',
                config: {
                    name: 'age_input',
                    options:[
                        {val:'1', text: 'Male'},
                        {val:'2', text: 'Female'},
                        {val:'3', text: 'Other'}
                        ]
                    },
                validation: {
                    required:false,
                    },
                    valid:true
            }
        }
    }

    updateForm = (newState) => {
        this.setState({
            formData:newState
        })
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for( let key in this.state.formData ){
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for(let key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid) {
            console.log(dataToSubmit)
        }

        // axios.post(url, dataToSubmit) - POST
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>

                <FormFields 
                    formData={this.state.formData}
                    onblur={(newState) => this.updateForm(newState)}
                    change={(newState) => this.updateForm(newState)}
                
                />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default User;