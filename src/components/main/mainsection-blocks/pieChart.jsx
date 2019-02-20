/* eslint-disable import/no-unresolved */
import React from 'react';
import { FaUndo, FaTimes, FaChartPie } from 'react-icons/fa';
import PieChartSvg from './PieChartSVG';
import UniHeader from './UniHeader';
import { getStorageItem } from '../../../dataLocalStorage';

const PieChart = () => {
    const smallSvgInPieChartBlock = getStorageItem('smallSvgInPieChartBlock');
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
                        {smallSvgInPieChartBlock.map(({ color, percent, text }) => (
                            <div>
                                <div className="piechart-svg">
                                    <svg height="40" width="40">
                                        <circle
                                            cx="20"
                                            cy="20"
                                            r="14"
                                            stroke={color}
                                            strokeWidth="3"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                                <div className="piechart-svg-txt">
                                    <p>
                                        <b>{percent}</b>
                                    </p>
                                    <p>{text}</p>
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
