import React from 'react';




class Header extends React.Component{

    render(){
        return (
                <header id="header_outer">
                    <div className="container">
                        <div className="header_section">
                            <div className="logo"><a href="javascript:void(0)"><img src="img/logob.png" alt=""></a></div>
                            <nav className="nav" id="nav">
                                <ul className="toggle">
                                    <li><a href="#top_content">Home</a></li>
                                    <li><a href="#service">Services</a></li>
                                    <li><a href="#work_outer">Work</a></li>
                                    <li><a href="#Portfolio">Portfolio</a></li>
                                    <li><a href="#client_outer">Clients</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
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
                            <a className="res-nav_click animated wobble wow" href="javascript:void(0)"><i class="fa-bars"></i></a> </div>
                        </div>
                    </div>
                </header>
        );
    }
}

export default Header;