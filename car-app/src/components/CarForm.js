import React from 'react';
import { TextField, Grid, Button, FormControl, RadioGroup, Radio, FormLabel, FormControlLabel } from '@material-ui/core';

import validateElement from './Validator';

class CarForm extends React.Component {
    state = {
        formIsValid: false,
        form: {
            name: {
                value: '',
                valid: false,
                touched: false,
                validations: {
                    required: true
                }
            },
            hasVehicle: {
                value: '',
                valid: false,
                touched: false,
                validations: {
                    required: true
                },
            },
            money: {
                value: '',
                valid: false,
                touched: false,
                validations: {
                    min: 1000,
                    required: true
                }
            }
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        const updatedForm = {
            ...this.state.form
        };

        const updatedElement = {
            ...updatedForm[name]
        };

        updatedElement.value = value;
        updatedElement.touched = true;
        updatedElement.valid = validateElement(updatedElement.validations, value);

        updatedForm[name] = updatedElement;

        let formIsValid = true;
        for(let element in updatedForm){
            formIsValid = (formIsValid && updatedForm[element].valid);
        }

        this.setState({
            formIsValid: formIsValid,
            form: updatedForm
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push('/vehicles');
    }

    render() {
        const { form, formIsValid } = this.state;

        return (
            <>
                <form className='car-form'>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <TextField
                                error={ !form.name.valid && form.name.touched }
                                fullWidth
                                name='name'
                                label='Username'
                                value={ form.name.value }
                                onChange={ this.handleChange }/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={ !form.money.valid && form.money.touched }
                                fullWidth
                                type='number'
                                name='money'
                                label='Money in your account (min $1000)'
                                inputProps={{ min: "0", step: "1" }}
                                value={ form.money.value }
                                onChange={ this.handleChange }/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <FormLabel Component='legend'>Do you have a car?</FormLabel>
                                <RadioGroup
                                    fullWidth
                                    name='hasVehicle'
                                    value={ form.hasVehicle.value }
                                    onChange={ this.handleChange }>
                                    <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                                    <FormControlLabel value='no' control={<Radio />} label='No' />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        { formIsValid && 
                            <Button variant='contained' color='primary' onClick={ this.handleSubmit }>
                                Upload!
                            </Button>
                        }
                    </Grid>
                </form>
            </>
        )
    }
}

export default CarForm;