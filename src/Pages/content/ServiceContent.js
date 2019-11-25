import React from 'react';




class ServiceContent extends React.Component{

    constructor(props){
        super(props);
        this.state.link = '#';
    }

    render(){
        return (
            <section id="service">
                <div className="container">
                    <h2>Services</h2>
                    <div className="service_area">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="service_block">
                                    <div className="service_icon delay-03s animated wow  zoomIn"> <span><i className="fa-flash"></i></span> </div>
                                    <h3 className="animated fadeInUp wow">Quick TurnAround</h3>
                                    <p className="animated fadeInDown wow">Proin iaculis purus consequat sem cure digni. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service_block">
                                    <div className="service_icon icon2  delay-03s animated wow zoomIn"> <span><i className="fa-comments"></i></span> </div>
                                    <h3 className="animated fadeInUp wow">Friendly Support</h3>
                                    <p className="animated fadeInDown wow">Proin iaculis purus consequat sem cure digni. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service_block">
                                    <div className="service_icon icon3  delay-03s animated wow zoomIn"> <span><i className="fa-shield"></i></span> </div>
                                    <h3 className="animated fadeInUp wow">top Security</h3>
                                    <p className="animated fadeInDown wow">Proin iaculis purus consequat sem cure digni. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceContent;