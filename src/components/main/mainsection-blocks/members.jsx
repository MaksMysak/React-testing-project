import React from 'react';
import {
    FaUndo,
    FaTimes,
    FaSearchPlus,
    FaPlus,
    FaUserAlt,
} from 'react-icons/fa';
import UniHeader from './UniHeader';
import MemberMainSec from './memberSec/memberMainSec';

const Members = () => {
    const bottButt = [
        {
            icon: <FaPlus />,
            txt: 'Load More...',
        },
        {
            icon: <FaSearchPlus />,
            txt: 'Search...',
        },
    ];
    return (
        <div className="main-section-block">
            <UniHeader
                mainLeftIco={<FaUserAlt size="24px" />}
                nameBlock="Members"
                rightIco1={<FaUndo />}
                rightIco2={<FaTimes />}
            />
            <div className="main-section-block-section">
                <div className="members-block-section-buttons">
                    <div className="members-block-section-buttons-txt">
                        <h6>
                            <small>Total users</small>
                        </h6>
                        <h6>184,036</h6>
                    </div>
                    <button className="members-block-section-buttons-but" type="button">
                        <h6>Sort by</h6>
                        <i className="fas fa-arrow-down" />
                    </button>
                </div>
                <MemberMainSec />
                <div className="members-main-block-section-bottom-btn">
                    {bottButt.map(button => (
                        <div className="members-main-block-section-bottom-button">
                            {button.icon}
                            <h6>{button.txt}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Members;
