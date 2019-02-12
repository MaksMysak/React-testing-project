import React from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import gravityPsd from '../../../images/main-section/IMG1.jpg';
import psdFoil from '../../../images/main-section/IMG2.jpg';
import woodLogo from '../../../images/main-section/IMG3.jpg';

const MediaTableMainSection = () => {
    const row = [
        {
            postImgSrc: gravityPsd,
            postImgAlt: 'gravityPsd',
            postDescTitle: 'Gravity PSD B-Cards',
            postDescText: 'The classic apeach...',
            dateYear: '26 Feb,2014',
            dateTime: '15:20',
        },
        {
            postImgSrc: psdFoil,
            postImgAlt: 'psdFoil',
            postDescTitle: 'PSD Foll Sticker',
            postDescText: 'Lorem ipsum dolor sit amet....',
            dateYear: '20 Feb,2014',
            dateTime: '11:03',
        },
        {
            postImgSrc: woodLogo,
            postImgAlt: 'woodLogo',
            postDescTitle: 'Wood Burning Logo',
            postDescText: 'A fresh looking wood...',
            dateYear: '26 Feb,2014',
            dateTime: '15:20',
        },
    ];
    return (
        row.map(rows => (
            <div className="media-main-section-block-row">
                <div className="media-main-section-block-row-item">
                    <div className="media-main-section-block-row-item-img">
                        <img className="media-img" src={rows.postImgSrc} alt={rows.postImgAlt} />
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
        ))

    );
};

export default MediaTableMainSection;
