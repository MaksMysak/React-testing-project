import React from 'react';
import { FaTable, FaTimes, FaMinusCircle } from 'react-icons/fa';
import gravityPsd from '../../../images/main-section/IMG1.jpg';
import psdFoil from '../../../images/main-section/IMG2.jpg';
import woodLogo from '../../../images/main-section/IMG3.jpg';
import UniHeader from './UniHeader';

const MediaTable = () => {
  return (
    <div className="main-section-block">
      <UniHeader
        mainLeftIco={<FaTable size="24px" />}
        nameBlock="Media Table"
        rightIco2={<FaTimes />}
      />
      <div className="main-section-block-section">
        <div className="media-main-section-block-row">
          <div className="media-main-section-block-row-item">
            <h6>
              <small>Post Description</small>
            </h6>
          </div>
          <div className="media-main-section-block-row-item">
            <h6>
              <small>Date</small>
            </h6>
          </div>
          <div className="media-main-section-block-row-item">
            <h6>
              <small>Post Info</small>
            </h6>
          </div>
          <div className="media-main-section-block-row-item">
            <h6>
              <small>Del</small>
            </h6>
          </div>
        </div>
        <div className="media-main-section-block-row">
          <div className="media-main-section-block-row-item">
            <div className="media-main-section-block-row-item-img">
              <img className="media-img" src={gravityPsd} alt="gravityPsd" />
            </div>
            <div className="media-main-section-block-row-item-txt">
              <h6>Gravity PSD B-Cards</h6>
              <h6>
                <small>The classic apeach...</small>
              </h6>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="media-main-section-block-row-item">
            <h6>
              <small>26 Feb,2014</small>
            </h6>
            <h6>
              <small>15:20</small>
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
        <div className="media-main-section-block-row">
          <div className="media-main-section-block-row-item">
            <div className="media-main-section-block-row-item-img">
              <img className="media-img" src={psdFoil} alt="psdFoil" />
            </div>
            <div className="media-main-section-block-row-item-txt">
              <h6>PSD Foll Sticker</h6>
              <h6>
                <small>Lorem ipsum dolor sit amet....</small>
              </h6>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="media-main-section-block-row-item">
            <h6>
              <small>20 Feb,2014</small>
            </h6>
            <h6>
              <small>11:03</small>
            </h6>
          </div>
          <div className="media-main-section-block-row-item">
            <h6>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                fugit quaerat sint omnis odio expedita quas? Temporibus, omnis!
              </small>
            </h6>
          </div>
          <div className="media-main-section-block-row-item">
            <FaMinusCircle size="24px" color="f85959" />
          </div>
        </div>
        <div className="media-main-section-block-row">
          <div className="media-main-section-block-row-item">
            <div className="media-main-section-block-row-item-img">
              <img className="media-img" src={woodLogo} alt="woodLogo" />
            </div>
            <div className="media-main-section-block-row-item-txt">
              <h6>Wood Burning Logo </h6>
              <h6>
                <small>A fresh looking wood...</small>
              </h6>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="media-main-section-block-row-item">
            <h6>
              <small>19 Jan,2014</small>
            </h6>
            <h6>
              <small>19:53</small>
            </h6>
          </div>
          <div className="media-main-section-block-row-item">
            <h6>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                itaque accusantium eius similique ipsa distinctio placeat magni
                odio?
              </small>
            </h6>
          </div>
          <div className="media-main-section-block-row-item">
            <FaMinusCircle size="24px" color="f85959" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaTable;
