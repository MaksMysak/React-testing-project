import React from 'react';
import { FaHome, FaCalendarAlt, FaArrowDown } from 'react-icons/fa';

const MainDashboard = () => (
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
                <div className="yes-tod">
                    <h5>Today</h5>
                </div>
                <div className="yes-tod">
                    <h5>Yesterday</h5>
                </div>
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
            <div className="item">
                <div className="circle-svg">
                    <h2 className="text-circle">16k</h2>
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="rgba(78, 78, 78, 0.5)"
                            strokeWidth="5"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="#ffff"
                            strokeWidth="5"
                            strokeDasharray="130"
                            strokeDashoffset="1"
                        />
                    </svg>
                </div>
                <div>
                    <h4>Total balance</h4>
                    <h6>+43%</h6>
                </div>
            </div>
            <div className="item">
                <div className="circle-svg">
                    <h2 className="text-circle">194</h2>
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="rgba(78, 78, 78, 0.5)"
                            strokeWidth="5"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="#ffff"
                            strokeWidth="5"
                            strokeDasharray="65%"
                            strokeDashoffset="50%"
                        />
                    </svg>
                </div>
                <div>
                    <h4>New members</h4>
                    <h6>+65%</h6>
                </div>
            </div>
            <div className="item">
                <div className="circle-svg">
                    <h2 className="text-circle">76</h2>
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="rgba(78, 78, 78, 0.5)"
                            strokeWidth="5"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="#ffff"
                            strokeWidth="5"
                            strokeDasharray="25%"
                            strokeDashoffset="50%"
                        />
                    </svg>
                </div>
                <div>
                    <h4>New orders</h4>
                    <h6>+25%</h6>
                </div>
            </div>
        </div>
    </div>
);

export default MainDashboard;
