/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaTimes, FaUndo, FaColumns } from 'react-icons/fa';
import UniHeader from './UniHeader';

const Buttons = () => (
    <div className="main-section-block">
        <UniHeader
            mainLeftIco={<FaColumns size="24px" />}
            nameBlock="Messages"
            rightIco1={<FaUndo />}
            rightIco2={<FaTimes />}
        />
        <div className="main-section-block-section">
            <div className="buttons-main-block-section">
                <div className="buttons-main-section-block-column">
                    <button type="button">Blue</button>
                    <button type="button">Green</button>
                    <button type="button">Yellow</button>
                    <button type="button">Red</button>
                    <button type="button">White</button>
                    <button type="button">Dark</button>
                </div>
                <div className="buttons-main-section-block-column">
                    <div className="button-button">
                        <button type="button">Active</button>
                        <button type="button">Normal</button>
                        <button type="button">Hover</button>
                    </div>
                    <button className="burger-menu-button" type="button">
              Normal
                    </button>
                    <div className="accordion-box">
                        <label htmlFor="label01">Normal</label>
                        <input type="checkbox" id="label01" className="accordion-check" />
                        <div className="accordion-contents">
                            <ul>
                                <li>- Image Gallery</li>
                                <li>- Lorem, ipsum.</li>
                                <li>- Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Buttons;
