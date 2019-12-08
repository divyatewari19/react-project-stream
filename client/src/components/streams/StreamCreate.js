import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import  StreamForm  from './streamForm';

/* Redux form and validation
 formProps constain all events such as onChange and anything passed to field*/

class StreamCreate extends React.Component {

    /*renderError({error,touched}) {
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
    }*/

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.createStream(formValues);
        //handleSubmit handles preventDefault
        //event.preventDefault();
    }

    render() {
        return (
           <div>
               <h3>Create a stream</h3>
               <StreamForm onSubmit={this.onSubmit} />
           </div>
        );
    }
    
}


export default connect(null, {createStream})(StreamCreate);