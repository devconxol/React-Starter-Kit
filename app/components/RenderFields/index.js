import React, {Component} from 'react';


class RenderFields extends Component {
    constructor(){
        super();
        this.getFields = this.getFields.bind(this)
    }

    renderError(field){
        const error = field.touched && field.error;
        if(error){
            return <span>{field.error}</span>
        } else {
            return null
        }
    }

    getFields(){
        const fieldsMeta = this.props.fields;
        return fieldsMeta.map(field => {
            let fieldDetail = this.props[field.name];
            return (
                <fieldset className="form-group" key={field.name}>
                    <label htmlFor={field.name}>{field.name}</label>
                    <input className="form-control"  {...fieldDetail.input} type={field.type} />
                    {this.renderError(fieldDetail.meta)}
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

export default RenderFields