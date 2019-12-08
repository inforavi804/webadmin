import React from 'react';
import client1 from '../../assets/img/person-1.jpg';
import client2 from '../../assets/img/person-2.jpg';



class ClientContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            link: '#'
        }
    }

    render(){
        return (
            <section className="main-section" id="client_outer">
                <h2>Happy Clients</h2>
                <div className="client_area ">
                    <div className="client_section animated  fadeInUp wow">
                        <div className="client_profile">
                            <div className="client_profile_pic"><img src={client1} alt="" /></div>
                            <h3>Saul Goodman</h3>
                            <span>Lawless Inc</span> </div>
                        <div className="quote_section">
                            <div className="quote_arrow"></div>
                            <p><b><img src="img/quote_sign_left.png" alt="" /></b> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src="img/quote_sign_right.png" alt="" /></small>						</p>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="client_section animated  fadeInDown wow">
                        <div className="client_profile flt">
                            <div className="client_profile_pic"><img src={client2} alt="" /></div>
                            <h3>Marie Schrader</h3>
                            <span>DEA Foundation</span> </div>
                        <div className="quote_section flt">
                            <div className="quote_arrow2"></div>
                            <p><b><img src="img/quote_sign_left.png" alt="" /></b> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src="img/quote_sign_right.png" alt="" /></small>						</p>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ClientContent;