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
          <div className="members-block-section-buttons-but">
            <h6>
              <small>Sort by</small>
            </h6>
            <i className="fas fa-arrow-down" />
          </div>
        </div>
        <MemberMainSec />
        <div className="members-main-block-section-bottom-btn">
          <div className="members-main-block-section-bottom-button">
            <FaPlus />
            <h6>Load More...</h6>
          </div>
          <div className="members-main-block-section-bottom-button">
            <FaSearchPlus />
            <h6>Search...</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
