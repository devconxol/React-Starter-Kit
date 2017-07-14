import React, {Component} from 'react';

class RenderFields extends Component {

    renderError(field){
        const  hasError = field.touched && field.error;
        if(hasError){
            return <span>{field.error}</span>
        } else {
            return null
        }
    }

    getFields(){
        const {fieldsMetaData} = this.props;
        return fieldsMetaData.map(field => {
            let fieldData = this.props[field.name];
            return (
                <fieldset key={field.name}>
                    <label htmlFor={field.name}>{field.name}</label>
                    <input type={field.type} {...fieldData.input}/>
                    {this.renderError(fieldData.meta)}
                </fieldset>
            )
        })
    }

    render(){
        return (
            <div>
                {this.getFields()}
            </div>
            )

    }
}

export default RenderFields;