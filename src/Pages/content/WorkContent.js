import React from 'react';




class WorkContent extends React.Component{

    constructor(props){
        super(props);
        this.state.link = '#';
    }

    render(){
        return (
            <section id="work_outer">
                <div className="top_cont_latest">
                    <div className="container">
                        <h2>Latest Work</h2>
                        <div className="work_section">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 wow fadeInLeft delay-05s">
                                    <div className="service-list">
                                        <div className="service-list-col1"> <i className="icon-doc"></i> </div>
                                        <div className="service-list-col2">
                                            <h3>Process Walkthrough</h3>
                                            <p>Proin iaculis purus digni consequat sem digni ssim. Donec entum digni ssim.</p>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <div className="service-list-col1"> <i className="icon-comment"></i> </div>
                                        <div className="service-list-col2">
                                            <h3>24/7 support</h3>
                                            <p>Proin iaculis purus consequat sem digni ssim. Digni ssim porttitora .</p>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <div className="service-list-col1"> <i className="icon-database"></i> </div>
                                        <div className="service-list-col2">
                                            <h3>Hosting & Storage</h3>
                                            <p>Proin iaculis purus consequat digni sem digni ssim. Purus donec porttitora entum.</p>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <div className="service-list-col1"> <i className="icon-cog"></i> </div>
                                        <div className="service-list-col2">
                                            <h3>Customization options</h3>
                                            <p>Proin iaculis purus consequat sem digni ssim. Sem porttitora entum.</p>
                                        </div>
                                    </div>
                                    <div className="work_bottom"> <span>Ready to take the plunge?</span> <a href="#contact" className="contact_btn">Contact Us</a> </div>
                                </div>
                                <figure className="col-lg-6 col-sm-6  text-right wow fadeInUp delay-02s"> </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkContent;