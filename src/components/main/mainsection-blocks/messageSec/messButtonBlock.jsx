import React from 'react';
import {
  FaLongArrowAltLeft,
  FaStar,
  FaTrashAlt,
  FaArrowUp,
} from 'react-icons/fa';

const MessButtonBlock = () => {
  return (
    <div className="message-buttons">
      <div className="message-buttons-items">
        <FaLongArrowAltLeft />
        <p>
          <small>Reply</small>
        </p>
      </div>
      <div className="message-buttons-items">
        <FaStar />
        <p>
          <small>Favorites</small>
        </p>
      </div>
      <div className="message-buttons-items">
        <FaTrashAlt />
        <p>
          <small>Delete</small>
        </p>
      </div>
      <div className="message-buttons-items">
        <FaArrowUp />
      </div>
    </div>
  );
};

export default MessButtonBlock;
