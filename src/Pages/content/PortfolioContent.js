import React, {useEffect, useState} from 'react';
import Isotope from 'isotope-layout';
import {DataService} from '../../services/api.js';

class PortfolioContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            link: '#',
            portfolioItems : []
        }

        this.dataService = new DataService();

        //var grid = document.querySelector('.isotope');
        // var iso = new Isotope( grid, {
        //     // options...
        //     itemSelector: '.isotope-item',
        //     layoutMode: "fitRows",
        //     masonry: {
        //         columnWidth: 200
        //     }
        // });
    }

    componentDidMount() {
        console.log('+--------- Component Mounted-------');
        this.subscription = this.dataService.getApiResponseAsJson().subscribe(resDataPortfolio => {
                if(resDataPortfolio){
                    this.setState({
                        portfolioItems: resDataPortfolio
                    });
                    console.log('+------------- Portfolio Items -----+');
                    console.log(this.state.portfolioItems);
                }
            },
            err => console.error(err)
        );
    }

    componentWillUnmount() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
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
                        {this.state.portfolioItems.map(item => (
                                <div className="portfolio-item one-four   videography isotope-item">
                                    <div className="portfolio-image"> <img src={item.download_url} alt={item.author} /> </div>
                                    <a title="Starbucks Coffee" rel="prettyPhoto[galname]" href="{item.url}">
                                        <div className="project-overlay">
                                            <div className="project-info">
                                                <div className="zoom-icon"></div>
                                                <h4 className="project-name">{item.author}</h4>
                                                <p className="project-categories">{item.author}</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        ))}
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