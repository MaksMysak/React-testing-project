import React from 'react';
import BackArrow from './../../images/aside-navbar/back-arrow.png';
import Lettter from './../../images/aside-navbar/lettter.png';
import Qwer from './../../images/aside-navbar/qwer.png';
import Mens from './../../images/aside-navbar/mens.png';

class AsideNavbar extends React.Component {
    render(){
        return(
            <div className="aside-navbar">
                <button className="aside-navbar-button">
                    <img className="aside-navbar-button-img" src={BackArrow} alt="strilka"/>
                </button>
                <button className="aside-navbar-button">
                    <img className="aside-navbar-button-img" src={Lettter} alt="lettter"/>
                </button>
                <button className="aside-navbar-button">
                    <img className="aside-navbar-button-img" src={Qwer} alt="qwer"/>
                </button>
                <button className="aside-navbar-button">
                    <img className="aside-navbar-button-img" src={Mens} alt="mens"/>
                </button>
            </div>
        );
    }
}
export default AsideNavbar;