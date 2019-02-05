import React from 'react';
import { FaChartBar, FaUndo, FaTimes } from 'react-icons/fa';
import UniHeader from './UniHeader';

const Section = () => {
  return (
    <div className="main-section-block">
      <UniHeader
        mainLeftIco={<FaChartBar size="24px" />}
        nameBlock="Section"
        rightIco1={<FaUndo />}
        rightIco2={<FaTimes />}
      />
      <div className="main-section-block-section" />
    </div>
  );
};

export default Section;
