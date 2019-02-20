/* eslint-disable import/no-unresolved */
import React from 'react';
import { FaUndo, FaTimes, FaChartPie } from 'react-icons/fa';
import PieChartSvg from '@components/main/mainsection-blocks/PieChartSVG';
import UniHeader from '@uniHeader/UniHeader';

const PieChart = () => {
    const smallSvgs = [
        {
            color: 'rgba(0, 171, 255, 1)',
            percent: '43%',
            text: 'Members',
        },
        {
            color: 'rgba(81, 238, 7, 1)',
            percent: '36%',
            text: 'uderss',
        },
        {
            color: 'rgba(241, 5, 5, 1)',
            percent: '21%',
            text: 'Guests',
        },
    ];
    return (
        <div className="main-section-block">
            <UniHeader
                mainLeftIco={<FaChartPie size="24px" />}
                nameBlock="Pie Chart"
                rightIco1={<FaUndo />}
                rightIco2={<FaTimes />}
            />
            <div className="main-section-block-section">
                <div className="piechart-main-section-number">
                    <h6>6,184</h6>
                    <h6>
                        <small>Total Balance</small>
                    </h6>
                </div>
                <div className="piechart-main-section-piechart">
                    <PieChartSvg />
                    <div className="piechart-txt">
                        {smallSvgs.map(svgs => (
                            <div>
                                <div className="piechart-svg">
                                    <svg height="40" width="40">
                                        <circle
                                            cx="20"
                                            cy="20"
                                            r="14"
                                            stroke={svgs.color}
                                            strokeWidth="3"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                                <div className="piechart-svg-txt">
                                    <p>
                                        <b>{svgs.percent}</b>
                                    </p>
                                    <p>{svgs.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChart;
