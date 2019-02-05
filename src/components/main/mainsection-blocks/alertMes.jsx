import React from 'react';
import { FaUndo, FaCommentAlt } from 'react-icons/fa';
import UniHeader from './UniHeader';
import AlertMesSec from './alertMessageSec/alertMainSec';

const AlertMessage = () => {
  return (
    <div className="main-section-block">
      <UniHeader
        mainLeftIco={<FaCommentAlt size="24px" />}
        nameBlock="Alert"
        rightIco2={<FaUndo />}
      />
      <AlertMesSec />
    </div>
  );
};

export default AlertMessage;
