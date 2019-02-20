/* eslint-disable import/no-unresolved */
import React from 'react';
import {
    FaComments,
    FaUndo,
    FaTimes,
    FaArrowUp,
    FaPencilAlt,
} from 'react-icons/fa';
import UniHeader from '@uniHeader/UniHeader';
import MesMainSec from './messageSec/messageMainBlockSec';

const Message = () => {
    const buttons = [
        {
            text: 'Lataest',
        },
        {
            text: 'Oldest',
        },
        {
            text: 'Favorits',
        },
    ];
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
                    {buttons.map(butt => (
                        <button className="message-block-section-button" type="button">
                            {butt.text}
                        </button>
                    ))}
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
