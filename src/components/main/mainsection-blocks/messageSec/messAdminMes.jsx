import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const MessAdmin = () => {
  return (
    <div className="old-message">
      <div className="old-message-title">
        <FaArrowRight />
        <h4>Admin</h4>
        <br />
        <br />
        <p>
          <small> / 2 days ago</small>
        </p>
      </div>
      <div className="old-message-txt">
        <p>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, et!
          </small>
        </p>
      </div>
    </div>
  );
};

export default MessAdmin;
