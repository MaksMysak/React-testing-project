import React from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const UniHeader = props => {
    const {
        mainLeftIco, nameBlock, rightIco1, rightIco2,
    } = props;
    return (
        <div className="main-section-block-header">
            {mainLeftIco}
            <h3>{nameBlock}</h3>
            {rightIco1 && <div>{rightIco1}</div>}
            <div>{rightIco2}</div>
        </div>
    );
};


UniHeader.propTypes = {
    nameBlock: PropTypes.string,
    mainLeftIco: PropTypes.node,
    rightIco1: PropTypes.node,
    rightIco2: PropTypes.node,
};

UniHeader.defaultProps = {
    nameBlock: 'Block name',
    mainLeftIco: '',
    rightIco1: '',
    rightIco2: <FaTimes />,
};

export default UniHeader;
