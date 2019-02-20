/* eslint-disable import/no-unresolved */
import React from 'react';
import { FaTable, FaTimes } from 'react-icons/fa';
import UniHeader from '@uniHeader/UniHeader';
import MediaTableMainSection from '@mainBlocks/mediaTableMainSection';

const MediaTable = () => {
    const titl = [
        {
            title: 'Post Description',
        },
        {
            title: 'Date',
        },
        {
            title: 'Post Info',
        },
        {
            title: 'Del',
        },
    ];

    return (
        <div className="main-section-block">
            <UniHeader
                mainLeftIco={<FaTable size="24px" />}
                nameBlock="Media Table"
                rightIco2={<FaTimes />}
            />
            <div className="main-section-block-section">
                <div className="media-main-section-block-row">
                    {titl.map(title => (
                        <div className="media-main-section-block-row-item">
                            <h6>
                                <small>{title.title}</small>
                            </h6>
                        </div>
                    ))}
                </div>
                <MediaTableMainSection />
            </div>
        </div>
    );
};
export default MediaTable;
