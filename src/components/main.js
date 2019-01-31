import React from 'react';
import MainNavbar from './main/main-navbar.js';
import MainDashboard from './main/main-dashboard.js';
import MainMainSection from './main/main-mainsection.js';

class Main extends React.Component {
    render(){
        return(
            //testing github
            <div className="main">
                <MainNavbar />   
                <MainDashboard />
                <MainMainSection />
            </div>
        );
    }
}

export default Main;