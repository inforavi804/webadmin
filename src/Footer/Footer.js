import React from 'react';
import ContactForm from './ContactForm';


class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                link: '#',
            };
    }

    render(){
        return (
            <footer className="footer_section" id="contact">
            <div className="container">
                <section className="main-section contact" id="contact">
                    <div className="contact_section">
                        <h2>Contact Us</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contact_block">
                                    <div className="contact_block_icon rollIn animated wow"><span><i className="fa-home"></i></span></div>
                                    <span> 308 Negra Arroyo Lane, <br />Albuquerque, NM, 87104 </span> 
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact_block">
                                    <div className="contact_block_icon icon2 rollIn animated wow"><span><i className="fa-phone"></i></span></div>
                                    <span> 1-800-BOO-YAHH </span> 
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact_block">
                                    <div className="contact_block_icon icon3 rollIn animated wow"><span><i className="fa-pencil"></i></span></div>
                                    <span> <a href="mailto:hello@butterfly.com"> hello@butterfly.com</a> </span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="contact-info-box address clearfix">
                                <h3>Don’t be shy. Say hello!</h3>
                                <p>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                                <p>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquampor id.</p>
                            </div>
                            <ul className="social-link">
                                <li className="twitter animated bounceIn wow delay-02s"><a href="javascript:void(0)"><i className="fa-twitter"></i></a></li>
                                <li className="facebook animated bounceIn wow delay-03s"><a href="javascript:void(0)"><i className="fa-facebook"></i></a></li>
                                <li className="pinterest animated bounceIn wow delay-04s"><a href="javascript:void(0)"><i className="fa-pinterest"></i></a></li>
                                <li className="gplus animated bounceIn wow delay-05s"><a href="javascript:void(0)"><i className="fa-google-plus"></i></a></li>
                                <li className="dribbble animated bounceIn wow delay-06s"><a href="javascript:void(0)"><i className="fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                        <ContactForm/>
                    </div>
                </section>
            </div>
            <div className="container">
                <div className="footer_bottom">
                    <span>Copyright @ 2019</span>
                    <div className="credits">
                        Designed by <a href={this.state.link}>R.K. Baranwal</a>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;