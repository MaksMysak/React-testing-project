import React from 'react';
import { FaUndo, FaTimes, FaChartPie } from 'react-icons/fa';
import UniHeader from './UniHeader';

const PieChart = () => {
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
          <div className="piechart-piechart">
            <svg
              className="circle-chart"
              viewBox="0 0 33.83098862 33.83098862"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="circle-chart__background"
                stroke="#efefef"
                strokeWidth="1"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="13.91549431"
              />
              <circle
                className="circle-chart__circle"
                stroke="#34AEFD"
                strokeWidth="3"
                strokeDasharray="40,500"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="13.91549431"
              />
              <circle
                className="circle-chart__circle"
                stroke="#34FD68"
                strokeWidth="2"
                strokeDasharray="31,100"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="13.91549431"
              />
              <circle
                className="circle-chart__circle"
                stroke="#FD3434"
                strokeWidth="1"
                strokeDasharray="16,100"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="13.91549431"
              />
              <g className="circle-chart__info">
                <text
                  className="circle-chart__percent"
                  x="16.91549431"
                  y="15.5"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="8"
                >
                  +42%
                </text>
                <text
                  className="circle-chart__subline"
                  x="16.91549431"
                  y="20.5"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="2"
                >
                  My Balance
                </text>
              </g>
            </svg>
          </div>
          <div className="piechart-txt">
            <div>
              <div className="piechart-svg">
                <svg height="40" width="40">
                  <circle
                    cx="20"
                    cy="20"
                    r="14"
                    stroke="rgba(0, 171, 255, 1)"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="piechart-svg-txt">
                <p>
                  <b>43%</b>
                </p>
                <p>Members</p>
              </div>
            </div>
            <div>
              <div className="piechart-svg">
                <svg height="40" width="40">
                  <circle
                    cx="20"
                    cy="20"
                    r="14"
                    stroke="rgba(81, 238, 7, 1)"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="piechart-svg-txt">
                <p>
                  <b>36%</b>
                </p>
                <p>Users</p>
              </div>
            </div>
            <div>
              <div className="piechart-svg">
                <svg height="40" width="40">
                  <circle
                    cx="20"
                    cy="20"
                    r="14"
                    stroke="rgba(241, 5, 5, 1)"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="piechart-svg-txt">
                <p>
                  <b>21%</b>
                </p>
                <p>Guests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
