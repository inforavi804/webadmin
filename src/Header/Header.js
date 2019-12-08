import React from 'react';
//import '../../src/assets/js/jquery.isotope.min.js';



class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                link: '#'
            }
    }

    render(){
        return (
                <header id="header_outer">
                    <div className="container">
                        <div className="header_section">
                            <div className="logo"></div>
                            <nav className="nav" id="nav">
                                <ul className="">
                                    <li><a href="#top_content">Home</a></li>
                                    <li><a href="#service">Services</a></li>
                                    <li><a href="#work_outer">Work</a></li>
                                    <li><a href="#Portfolio">Portfolio</a></li>
                                    <li><a href="#client_outer">Clients</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                            <a className="res-nav_click animated wobble wow" href={this.state.link}><i className="fa-bars"></i></a> 
                        </div>
                    </div>
                </header>
        );
    }
}

export default Header;