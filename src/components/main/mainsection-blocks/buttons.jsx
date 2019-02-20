/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaTimes, FaUndo, FaColumns } from 'react-icons/fa';
import UniHeader from '@uniHeader/UniHeader';

const Buttons = () => {
    const colorButtons = [
        {
            colorTxt: 'Blue',
        },
        {
            colorTxt: 'Green',
        },
        {
            colorTxt: 'Yellow',
        },
        {
            colorTxt: 'Red',
        },
        {
            colorTxt: 'White',
        },
        {
            colorTxt: 'Dark',
        },
    ];

    const stateButtons = [
        {
            stateTxt: 'Active',
        },
        {
            stateTxt: 'Normal',
        },
        {
            stateTxt: 'Hover',
        },
    ];

    return (
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
                        {colorButtons.map(({ colorTxt }) => (<button type="button">{ colorTxt }</button>))}
                    </div>
                    <div className="buttons-main-section-block-column">
                        <div className="button-button">
                            {stateButtons.map(({ stateTxt }) => (<button type="button">{ stateTxt }</button>))}
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
};

export default Buttons;
