import React from 'react';



class LogoContent extends React.Component{

    constructor(props){
        super(props);
        this.state.link = '';
    }

    render(){
        return (
            <div className="c-logo-part">
                <div className="container">
                    <ul className="delay-06s animated  bounce wow">
                        <li><a href={this.state.link}><img src="img/c-liogo1.png" alt="" /></a></li>
                        <li><a href={this.state.link}><img src="img/c-liogo2.png" alt="" /></a></li>
                        <li><a href={this.state.link}><img src="img/c-liogo3.png" alt="" /></a></li>
                        <li><a href={this.state.link}><img src="img/c-liogo5.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LogoContent;