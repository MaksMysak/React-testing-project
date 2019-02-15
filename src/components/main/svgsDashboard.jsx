/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class SvgsDashboard extends React.Component {

    static propTypes = {
        itm: PropTypes.array.isRequired,
    };

    render() {
        const { itm } = this.props;
        const svgs = itm.map(
            ({
                textCircle, strokeDasharray, strokeDashoffset, title, percent,
            }) => (
                <div className="item" key={textCircle}>
                    <div className="circle-svg">
                        <h2 className="text-circle">{textCircle}</h2>
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
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                            />
                        </svg>
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <h6>{percent}</h6>
                    </div>
                </div>
            ),
        );
        return svgs;
    }
}

export default SvgsDashboard;
