import React from 'react';




class TopContent extends React.Component{

    constructor(props){
        super(props);
        this.state.link = '#';
    }

    render(){
        return (
            <section id="top_content" className="top_cont_outer">
                <div className="top_cont_inner">
                    <div className="container">
                        <div className="top_content">
                            <div className="row">
                                <div className="col-lg-5 col-sm-7">
                                    <div className="top_left_cont flipInY wow animated">
                                        <h3>Colourful &amp; sexy!</h3>
                                        <h2>creating websites that
                        make you stop &amp; stare</h2>
                                        <p> Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum. </p>
                                        <a href="#service" className="learn_more2">Learn more</a> </div>
                                </div>
                                <div className="col-lg-7 col-sm-5"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TopContent;