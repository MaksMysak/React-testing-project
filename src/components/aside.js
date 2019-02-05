import React from 'react';
import AsideNavbar from './aside/aside-navbar.js';
import AsideInfo from './aside/aside-info.js';
import AsideMenu from './aside/aside-menu.js';

class Aside extends React.Component {
    render(){
        return(
            <div className="aside">
                <AsideNavbar />
                <AsideInfo />
                <AsideMenu />
            </div>
        );
    }
}

export default Aside;