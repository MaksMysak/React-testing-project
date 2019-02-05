import React from 'react';
import arrow from './../../images/main navbar/arrow.png';

class MainNavbar extends React.Component {
    render(){
        return(
            <div className="main-navbar">   
                <div clas="main-navbar-open-aside">       
                    {/* <span style="fontSize:30px;cursor:pointer" onClick="openNav()">&#9776;</span>         */}
                </div>
                <div className="search-box">
                    <input className="search-txt" type="text" placeholder="Search..."/>
                    <a className="search-btn" href="#">
                        <button className="search-btn">
                            <img src={arrow} alt="arrow"/>
                        </button>
                    </a>
                </div>
                <div className="navbar-logo">
                    <h4>glazzed</h4>
                </div> 
            </div>
        );
    }
}

export default MainNavbar;