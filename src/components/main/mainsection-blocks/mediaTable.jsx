import React from 'react';
import { FaTable, FaTimes, FaMinusCircle } from 'react-icons/fa';
import gravityPsd from '../../../images/main-section/IMG1.jpg';
import psdFoil from '../../../images/main-section/IMG2.jpg';
import woodLogo from '../../../images/main-section/IMG3.jpg';
import UniHeader from './UniHeader';

const MediaTable = () => {
    const row = [
        {
            postDescImg: <img className="media-img" src={gravityPsd} alt="gravityPsd" />,
            postDescTitle: 'Gravity PSD B-Cards',
            postDescText: 'The classic apeach...',
            dateYear: '26 Feb,2014',
            dateTime: '15:20',
        },
        {
            postDescImg: <img className="media-img" src={psdFoil} alt="psdFoil" />,
            postDescTitle: 'PSD Foll Sticker',
            postDescText: 'Lorem ipsum dolor sit amet....',
            dateYear: '20 Feb,2014',
            dateTime: '11:03',
        },
        {
            postDescImg: <img className="media-img" src={woodLogo} alt="woodLogo" />,
            postDescTitle: 'Wood Burning Logo',
            postDescText: 'A fresh looking wood...',
            dateYear: '26 Feb,2014',
            dateTime: '15:20',
        },
    ];

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
                {row.map(rows => (
                    <div className="media-main-section-block-row">
                        <div className="media-main-section-block-row-item">
                            <div className="media-main-section-block-row-item-img">
                                {rows.postDescImg}
                            </div>
                            <div className="media-main-section-block-row-item-txt">
                                <h6>{rows.postDescTitle}</h6>
                                <h6>
                                    <small>{rows.postDescText}</small>
                                </h6>
                                <button type="button">Edit</button>
                            </div>
                        </div>
                        <div className="media-main-section-block-row-item">
                            <h6>
                                <small>{rows.dateYear}</small>
                            </h6>
                            <h6>
                                <small>{rows.dateTime}</small>
                            </h6>
                        </div>
                        <div className="media-main-section-block-row-item">
                            <h6>
                                <small>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Deserunt odio numquam quo obcaecati impedit nesciunt aut dolore
                            possimus?
                                </small>
                            </h6>
                        </div>
                        <div className="media-main-section-block-row-item">
                            <FaMinusCircle size="24px" color="f85959" />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default MediaTable;
