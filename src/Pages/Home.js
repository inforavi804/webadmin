import React from 'react';
import TopContent from './content/TopContent';
import ServiceContent from './content/ServiceContent';
import WorkContent from './content/WorkContent';
import PortfolioContent from './content/PortfolioContent';
import ClientContent from './content/ClientContent';
import LogoContent from './content/LogoContent';
import TeamContent from './content/TeamContent';
import TweetFeedContent from './content/TweetFeedContent';



class Home extends React.Component{

    constructor(props){
        super(props);
        this.state.link = '#';
    }

    render(){
        return (
            <div>
                <TopContent/>
                <ServiceContent/>
                <WorkContent/>
                <PortfolioContent/>
                <ClientContent/>
                <LogoContent/>
                <TeamContent/>
                <TweetFeedContent/>
            </div>
        );
    }
}

export default Home;