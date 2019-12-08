import React from 'react';
import { Field, reduxForm } from 'redux-form';

/* Redux form and validation
 formProps constain all events such as onChange and anything passed to field*/

class StreamForm extends React.Component {

    renderError({error,touched}) {
        if(   error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }  
    }

    //arrow function as otherwise this would have no context
    renderInput = (formProps) => {
        console.log(formProps);
        console.log(formProps.meta);
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ' '}`
        return (
        <div className={className}>
            <label>{formProps.label}</label>
            <input
                {...formProps.input}
                autoComplete="off"
            />
            {this.renderError(formProps.meta)}
        </div>
        );
    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.onSubmit(formValues);
        //handleSubmit handles preventDefault
        //event.preventDefault();
    }

    render() {
        return (
            <form 
            onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"></Field>
                <Field name="description" component={this.renderInput} label="Enter Description"></Field>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
    
}

const validate = (formValues) => {
     const errors = {};

     if (!formValues.title) {
         errors.title = 'You must enter a title';
     }

     if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

// data would be stored in redux store inside the object stream create
/*export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);*/

//adding connect
export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

