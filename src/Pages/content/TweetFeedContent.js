import React from 'react';




class TweetFeedContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            link: '#'
        }
    }
    
    render(){
        return (
            <section className="main-section team" id="team">
                <div className="container">
                    <h2>Amazing Team</h2>
                    <h6>Take a closer look into our amazing team. We won’t bite.</h6>
                    <div className="team-leader-block clearfix">
                        <div className="team-leader-box">
                            <div className="team-leader wow fadeInDown delay-03s">
                                <div className="team-leader-shadow"><a href={this.state.link}></a></div>
                                <img src="img/team-leader-pic1.jpg" alt="" />
                                <ul>
                                    <li><a href={this.state.link} className="fa-twitter"></a></li>
                                    <li><a href={this.state.link} className="fa-facebook"></a></li>
                                    <li><a href={this.state.link} className="fa-pinterest"></a></li>
                                    <li><a href={this.state.link} className="fa-google-plus"></a></li>
                                </ul>
                            </div>
                            <h3 className="wow fadeInDown delay-03s">Walter White</h3>
                            <span className="wow fadeInDown delay-03s">Chief Executive Officer</span>
                            <p className="wow fadeInDown delay-03s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat sollicitudin cursus. Dolor sit amet, consectetur adipiscing elit proin consequat.</p>
                        </div>
                        <div className="team-leader-box">
                            <div className="team-leader  wow fadeInDown delay-06s">
                                <div className="team-leader-shadow"><a href={this.state.link}></a></div>
                                <img src="img/team-leader-pic2.jpg" alt="" />
                                <ul>
                                    <li><a href={this.state.link} className="fa-twitter"></a></li>
                                    <li><a href={this.state.link} className="fa-facebook"></a></li>
                                    <li><a href={this.state.link} className="fa-pinterest"></a></li>
                                    <li><a href={this.state.link} className="fa-google-plus"></a></li>
                                </ul>
                            </div>
                            <h3 className="wow fadeInDown delay-06s">Jesse Pinkman</h3>
                            <span className="wow fadeInDown delay-06s">Product Manager</span>
                            <p className="wow fadeInDown delay-06s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat sollicitudin cursus. Dolor sit amet, consectetur adipiscing elit proin consequat.</p>
                        </div>
                        <div className="team-leader-box">
                            <div className="team-leader wow fadeInDown delay-09s">
                                <div className="team-leader-shadow"><a href={this.state.link}></a></div>
                                <img src="img/team-leader-pic3.jpg" alt="" />
                                <ul>
                                    <li><a href={this.state.link} className="fa-twitter"></a></li>
                                    <li><a href={this.state.link} className="fa-facebook"></a></li>
                                    <li><a href={this.state.link} className="fa-pinterest"></a></li>
                                    <li><a href={this.state.link} className="fa-google-plus"></a></li>
                                </ul>
                            </div>
                            <h3 className="wow fadeInDown delay-09s">Skyler white</h3>
                            <span className="wow fadeInDown delay-09s">Accountant</span>
                            <p className="wow fadeInDown delay-09s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat sollicitudin cursus. Dolor sit amet, consectetur adipiscing elit proin consequat.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TweetFeedContent;