import React from 'react';
import MesMainSec from './../../../../src/components/main/mainsection-blocks/messageSec/messageMainBlockSec.js';
import UniHeader from "./../../../components/main/mainsection-blocks/UniHeader.js";
import { FaComments } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

class Message extends React.Component {
    render(){
        this.state = {
            mainLeftIco:<FaComments size="24px" />,
            nameBlock:"Messages",
            rightIco1:<FaUndo />,
            rightIco2:<FaTimes />,
            
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
                    <div className="message-main-block-section-buttons">
                        <button className="message-block-section-button">Latest</button>
                        <button className="message-block-section-button">Oldest</button>
                        <button className="message-block-section-button">Favorits</button>                                
                    </div>
                    <MesMainSec/>
                    <div className="message-main-block-section-leave">
                        <div className="message-main-block-section-leave-button">
                            <FaPencilAlt />
                        </div>
                        <div className="message-main-block-section-leave-txt">
                            <h5><small>Leave a Message.....</small></h5>
                        </div>
                        <div className="message-main-block-section-leave-button">
                            <FaArrowUp/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default Message;