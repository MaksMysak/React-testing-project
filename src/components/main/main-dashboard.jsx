/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { FaHome, FaCalendarAlt, FaArrowDown } from 'react-icons/fa';
import SvgsDashboard from './svgsDashboard';

class MainDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { date: true, properties: JSON.parse(localStorage.getItem('data')) };
    }

    handleClick = () => {
        this.setState(todayState => ({ date: !todayState.date }));
    }

    render() {
        const { date, properties: { dashboardInfoToday }, properties: { dashboardInfoYesterday } } = this.state;
        return (
            <div className="main-dashboard">
                <div className="main-dashboard-item">
                    <div className="items">
                        <FaHome size="50px" />
                        <h1 className="dashboard-txt">Dashboard</h1>
                        <div className="dashboard-smalltext">
                            <h6>Home Dashboard</h6>
                        </div>
                    </div>
                    <div className="items">
                        <button
                            name="today"
                            type="button"
                            className="yes-tod"
                            onClick={this.handleClick}
                        >
                            <h5>Today</h5>
                        </button>
                        <button
                            name="yesterday"
                            type="button"
                            className="yes-tod"
                            onClick={this.handleClick}
                        >
                            <h5>Yesterday</h5>
                        </button>
                    </div>
                    <div className="items">
                        <FaCalendarAlt />
                        <h5>February 26, 2014</h5>
                        <FaArrowDown />
                    </div>
                </div>
                <div className="main-dashboard-item">
                    <div className="item">
                        <h3>Resume</h3>
                        <h3>of the day.</h3>
                        <p className="item-smalltext">
                            <small>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                            distinctio, voluptas esse ad consequatur.
                            </small>
                        </p>
                    </div>
                    {date ? <SvgsDashboard itm={dashboardInfoToday} />
                        : <SvgsDashboard itm={dashboardInfoYesterday} />}
                </div>
            </div>
        );
    }
}

export default MainDashboard;
