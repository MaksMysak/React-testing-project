/* eslint-disable import/no-unresolved */
import React from 'react';
import { FaTimes, FaUndo, FaSlidersH } from 'react-icons/fa';
import UniHeader from '@uniHeader/UniHeader';

const UIElements = () => (
    <div className="main-section-block">
        <UniHeader
            mainLeftIco={<FaSlidersH size="24px" />}
            nameBlock="UI Elements"
            rightIco1={<FaUndo />}
            rightIco2={<FaTimes />}
        />
        <div className="main-section-block-section">
            <div className="ui-main-section-block">
                <div className="ui-main-section-block-toggle-btn" />
                <div className="ui-main-section-block-sheck-btn" />
                <div className="ui-main-section-block-swich-btn" />
            </div>
        </div>
    </div>
);

export default UIElements;
