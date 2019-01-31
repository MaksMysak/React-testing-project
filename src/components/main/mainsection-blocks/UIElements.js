import React from 'react';
import UniHeader from "./../../../components/main/mainsection-blocks/UniHeader.js";

import { FaTimes } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

class UIElements extends React.Component {
    render(){
        this.state = {
            mainLeftIco:<FaSlidersH size="24px" />,
            nameBlock:"UI Elements",
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
                    <div className="ui-main-section-block">
                        <div className="ui-main-section-block-toggle-btn">
                        <div class="container">
                                <div class="toggle-btn" onClick="this.classList.toggle('active')">
                                    <div class="inner-circle"></div>
                                </div>
                        </div>
                        <div class="container">
                        <div class="toggle-btn" onClick="this.classList.toggle('active')">                                
                                <div class="inner-circle"></div>
                            </div>
                        </div>
                        <div class="container">
                                <div class="toggle-btn" onClick="this.classList.toggle('active')">                                
                                    <div class="inner-circle"></div>
                                </div>
                        </div>
                        <div class="container">
                                <div class="toggle-btn" onClick="this.classList.toggle('active')">                                
                                    <div class="inner-circle"></div>
                                </div>
                        </div>
                        </div>
                        <div className="ui-main-section-block-sheck-btn">

                        </div>
                        <div className="ui-main-section-block-swich-btn">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UIElements;