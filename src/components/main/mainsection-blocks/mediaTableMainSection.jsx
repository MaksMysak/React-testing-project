import React from 'react';
import { FaMinusCircle } from 'react-icons/fa';

class MediaTableMainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('data')),
        };
    }

    render() {
        const { data } = this.state;
        return (
            <React.Fragment>
                {data.dataInMediaTableBlock.map(({
                    imgSrc, descriptinTitle, descriptionText, dateYear, dateTime,
                }) => (
                    <div className="media-main-section-block-row">
                        <div className="media-main-section-block-row-item">
                            <div className="media-main-section-block-row-item-img">
                                <img className="media-img" src={imgSrc} alt={imgSrc} />
                            </div>
                            <div className="media-main-section-block-row-item-txt">
                                <h6>{descriptinTitle}</h6>
                                <h6>
                                    <small>{descriptionText}</small>
                                </h6>
                                <button type="button">Edit</button>
                            </div>
                        </div>
                        <div className="media-main-section-block-row-item">
                            <h6>
                                <small>{dateYear}</small>
                            </h6>
                            <h6>
                                <small>{dateTime}</small>
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
            </React.Fragment>

        );
    }
}

export default MediaTableMainSection;
