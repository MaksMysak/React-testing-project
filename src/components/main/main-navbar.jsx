/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import arrow from '@image/main navbar/arrow.png';

class MainNavbar extends React.Component {
    state = {
        search: '',
    }

    onchange = e => {
        this.setState({ search: e.target.value });
    }

    onclick = e => {
        this.setState({ search: e.target.value });
        const { search } = this.state;
        alert(search);
    }

    render() {
        return (
            <div className="main-navbar">
                <div clas="main-navbar-open-aside" />
                <div className="search-box">
                    <input className="search-txt" type="text" placeholder="Search..." onChange={this.onchange} />
                    <a className="search-btn" href="searchBtn">
                        <button className="search-btn" type="button" onClick={this.onclick}>
                            <img src={arrow} alt="arrow" />
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
