/* eslint-disable import/no-unresolved */
import React from 'react';
import arrow from '@image/main navbar/arrow.png';

export const MainNavbar = () => (
    <div className="main-navbar">
        <div clas="main-navbar-open-aside" />
        <div className="search-box">
            <input className="search-txt" type="text" placeholder="Search..." />
            <a className="search-btn" href="searchBtn">
                <button className="search-btn" type="button">
                    <img src={arrow} alt="arrow" />
                </button>
            </a>
        </div>
        <div className="navbar-logo">
            <h4>glazzed</h4>
        </div>
    </div>
);

export default MainNavbar;
