import React from 'react';
import { FaHome, FaCalendarAlt, FaArrowDown } from 'react-icons/fa';

const MainDashboard = () => {
    const dashArr = [
        {
            textCircle: '16k',
            strokeDasharray: '130',
            strokeDashoffset: '1',
            title: 'Total balance',
            percent: '+43%',
        },
        {
            textCircle: '194',
            strokeDasharray: '65%',
            strokeDashoffset: '50%',
            title: 'New members',
            percent: '+65%',
        },
        {
            textCircle: '76',
            strokeDasharray: '25%',
            strokeDashoffset: '50%',
            title: 'New orders',
            percent: '+25%',
        },
    ];

    const items = [
        {
            dashIcon: <FaHome size="50px" />,
            classDashTxt: 'dashboard-txt',
            dashTxt: 'Dashboard',
            classDashSmallTxt: 'dashboard-smalltext',
            dashSmallTxt: 'Home Dashboard',
        },
        {
            nameOfClass: 'yesTod',
            todTxt: 'Today',
            yesTxt: 'Yesterday',
        },
        {
            calendarIcon: <FaCalendarAlt />,
            arrowIcon: <FaArrowDown />,
            date: 'February 26, 2014',
        },
    ];
    return (
        <div className="main-dashboard">
            <div className="main-dashboard-item">
                {items.map(({
                    dashIcon, classDashTxt, dashTxt, classDashSmallTxt, dashSmallTxt, nameOfClass, yesTxt, todTxt, calendarIcon, arrowIcon, date,
                }) => (
                    <div className="items">
                        {dashIcon}
                        <h1 className={classDashTxt}>{dashTxt}</h1>
                        <div className={classDashSmallTxt}>
                            <h6>{dashSmallTxt}</h6>
                        </div>
                        <div className={nameOfClass}>
                            <h5>{todTxt}</h5>
                        </div>
                        <div className={nameOfClass}>
                            <h5>{yesTxt}</h5>
                        </div>
                        {calendarIcon}
                        <h4>{date}</h4>
                        {arrowIcon}
                    </div>
                ))}
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
                {dashArr.map(svgs => (
                    <div className="item">
                        <div className="circle-svg">
                            <h2 className="text-circle">{svgs.textCircle}</h2>
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
                                    strokeDasharray={svgs.strokeDasharray}
                                    strokeDashoffset={svgs.strokeDashoffset}
                                />
                            </svg>
                        </div>
                        <div>
                            <h4>{svgs.title}</h4>
                            <h6>{svgs.percent}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainDashboard;
