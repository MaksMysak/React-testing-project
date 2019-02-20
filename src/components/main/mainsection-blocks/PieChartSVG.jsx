import React from 'react';

const PieChartSvg = () => (
    <div className="piechart-piechart">
        <svg
            className="circle-chart"
            viewBox="0 0 33.83098862 33.83098862"
            width="200"
            height="200"
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
);

export default PieChartSvg;
