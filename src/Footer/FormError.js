import React from 'react';


class FormError extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            formErrors: this.props.errors
        }

    }

    render(){
        return (
            <div className='formErrors'>
                {Object.keys(this.state.formErrors).map((fieldName, i) => {
                if(this.state.formErrors[fieldName].length > 0){
                    return (
                    <p key={i}>{fieldName} {this.state.formErrors[fieldName]}</p>
                    )        
                } else {
                    return '';
                }
                })}
            </div>
      );
    }
}
  
export default FormError;