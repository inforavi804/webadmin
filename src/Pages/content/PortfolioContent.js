import React from 'react';




class PortfolioContent extends React.Component{

    constructor(props){
        super(props);
        this.state.link = '#';
    }

    render(){
        return (
            <section id="Portfolio" className="content">
        
                <div className="container portfolio-title">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>
                </div>
        
                <div className="portfolio-top"></div>

                <div className="portfolio">
        
                    <div id="filters" className="sixteen columns">
                        <ul className="clearfix">
                            <li>
                                <a id="all" href="#" data-filter="*" className="active">
                                    <h5>All</h5>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#" data-filter=".branding">
                                    <h5>Branding</h5>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#" data-filter=".design">
                                    <h5>Design</h5>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#" data-filter=".photography">
                                    <h5>Photography</h5>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#" data-filter=".videography">
                                    <h5>Videography</h5>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#" data-filter=".web">
                                    <h5>Web</h5>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="isotope"  id="portfolio-wrap">
        
                        <div className="portfolio-item one-four   videography isotope-item">
                            <div className="portfolio-image"> <img src="img/portfolio_pic1.jpg" alt="Portfolio 1" /> </div>
                            <a title="Starbucks Coffee" rel="prettyPhoto[galname]" href="http://clapat.ro/themes/newave/images/portfolio/portfolio2.jpg">
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <div className="zoom-icon"></div>
                                        <h4 className="project-name">Leica Camera</h4>
                                        <p className="project-categories">Videography</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div  className="portfolio-item one-four  design isotope-item">
                            <div className="portfolio-image"> <img src="img/portfolio_pic2.jpg" alt="Portfolio 1" /> </div>
                            <div className="project-overlay">
                                <div className="open-project-link"> <a className="open-project" href="http://clapat.ro/themes/newave/project-video-expander.html" title="Open Project"></a> </div>
                                <div className="project-info">
                                    <div className="zoom-icon"></div>
                                    <h4 className="project-name">Foto Template</h4>
                                    <p className="project-categories">Design</p>
                                </div>
                            </div>
                        </div>

                        <div  className="portfolio-item one-four  design  isotope-item">
                            <div className="portfolio-image"> <img src="img/portfolio_pic3.jpg" alt="Portfolio 1" /></div>
                            <div className="project-overlay">
                                <div className="open-project-link"> <a className="open-project" href="http://clapat.ro/themes/newave/project-normal-expander-1.html" title="Open Project"></a> </div>
                                <div className="project-info">
                                    <div className="zoom-icon"></div>
                                    <h4 className="project-name">Sony Phone</h4>
                                    <p className="project-categories">Design</p>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item one-four  photography  branding web isotope-item">
                            <div className="portfolio-image"> <img src="img/portfolio_pic4.jpg" alt="Portfolio 1" /> </div>
                            <div className="project-overlay">
                                <div className="open-project-link"> <a className="open-project" href="http://clapat.ro/themes/newave/project-fullscreen-expander-1.html" title="Open Project"></a> </div>
                                <div className="project-info">
                                    <div className="zoom-icon"></div>
                                    <h4 className="project-name">Nike Shoes</h4>
                                    <p className="project-categories">Photography, Web, Branding</p>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item one-four  design isotope-item">
                            <div className="portfolio-image"> <img src="img/portfolio_pic5.jpg" alt="Portfolio 1" /> </div>
                            <div className="project-overlay">
                                <div className="open-project-link"> <a className="open-project" href="http://clapat.ro/themes/newave/project-fullscreen-expander-2.html" title="Open Project"></a> </div>
                                <div className="project-info">
                                    <div className="zoom-icon"></div>
                                    <h4 className="project-name">Vinyl Record</h4>
                                    <p className="project-categories">Design</p>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item one-four  web isotope-item">
                            <div className="portfolio-image"> <img src="img/portfolio_pic6.jpg" alt="Portfolio 1" /> </div>
                            <div className="project-overlay">
                                <div className="open-project-link"> <a className="open-project" href="http://clapat.ro/themes/newave/project-normal-expander-2.html" title="Open Project"></a> </div>
                                <div className="project-info">
                                    <div className="zoom-icon"></div>
                                    <h4 className="project-name">iPhone</h4>
                                    <p className="project-categories">Web</p>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item one-four  design web isotope-item">
                            <div className="portfolio-image"> <img src="img/portfolio_pic7.jpg" alt="Portfolio 1" /> </div>
                            <a href="http://clapat.ro/themes/newave/project-external-1.html" className="external">
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <div className="zoom-icon"></div>
                                        <h4 className="project-name">Nexus Phone</h4>
                                        <p className="project-categories">Design, Web</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div  className="portfolio-item one-four   photography isotope-item">
                            <div className="portfolio-image"> <img src="img/portfolio_pic8.jpg" alt="Portfolio 1" /> </div>
                            <a title="Stereo Headphones" rel="prettyPhoto[galname]" href="http://clapat.ro/themes/newave/images/portfolio/portfolio8.jpg">
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <div className="zoom-icon"></div>
                                        <h4 className="project-name">Art Frame</h4>
                                        <p className="project-categories">Photography</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
        
                <div className="portfolio-bottom"></div>
        
                <div id="project-page-holder">
                    <div className="clear"></div>
                    <div id="project-page-data"></div>
                </div>        
            </section>
        );
    }
}

export default PortfolioContent;