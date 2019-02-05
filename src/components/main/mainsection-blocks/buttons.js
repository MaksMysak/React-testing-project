import React from 'react';
import UniHeader from "./../../../components/main/mainsection-blocks/UniHeader.js";

import { FaTimes } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaColumns } from "react-icons/fa";

class Buttons extends React.Component {
    render(){
        this.state = {
            mainLeftIco:<FaColumns size="24px" />,
            nameBlock:"Messages",
            rightIco1:<FaUndo />,
            rightIco2:<FaTimes />
        }
        return(
            <div className="main-section-block">
                <UniHeader
                    mainLeftIco={this.state.mainLeftIco}
                    nameBlock={this.state.nameBlock}
                    rightIco1={this.state.rightIco1}
                    rightIco2={this.state.rightIco2}
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
                            <button className="burger-menu-button" type="button">Normal</button>
                            <div className="accordion-box">
                                <label htmlFor="label01">Normal</label>
                                <input type="checkbox" id="label01" className="accordion-check"/>
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
    }
}

export default Buttons;