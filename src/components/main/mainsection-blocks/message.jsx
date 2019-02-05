import React from 'react';
import {
  FaComments,
  FaUndo,
  FaTimes,
  FaArrowUp,
  FaPencilAlt,
} from 'react-icons/fa';
import MesMainSec from './messageSec/messageMainBlockSec';
import UniHeader from './UniHeader';

const Message = () => {
  return (
    <div className="main-section-block">
      <UniHeader
        mainLeftIco={<FaComments size="24px" />}
        nameBlock="Messages"
        rightIco1={<FaUndo />}
        rightIco2={<FaTimes />}
      />
      <div className="main-section-block-section">
        <div className="message-main-block-section-buttons">
          <button className="message-block-section-button" type="button">
            Latest
          </button>
          <button className="message-block-section-button" type="button">
            Oldest
          </button>
          <button className="message-block-section-button" type="button">
            Favorits
          </button>
        </div>
        <MesMainSec />
        <div className="message-main-block-section-leave">
          <div className="message-main-block-section-leave-button">
            <FaPencilAlt />
          </div>
          <div className="message-main-block-section-leave-txt">
            <h5>
              <small>Leave a Message.....</small>
            </h5>
          </div>
          <div className="message-main-block-section-leave-button">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
