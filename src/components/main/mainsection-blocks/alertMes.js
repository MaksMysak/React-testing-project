import React from 'react';
import UniHeader from "./../../../components/main/mainsection-blocks/UniHeader.js";
import AlertMesSec from "./../../../components/main/mainsection-blocks/alertMessageSec/alertMainSec.js";

import { FaUndo } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";

class AlertMessage extends React.Component {
    render(){

        this.state = {
            mainLeftIco:<FaCommentAlt size="24px" />,
            nameBlock:"Alert",
            rightIco2:<FaUndo />
        }

        return(
            <div className="main-section-block">
                <UniHeader
                    mainLeftIco={this.state.mainLeftIco}
                    nameBlock={this.state.nameBlock}
                    rightIco2={this.state.rightIco2}
                />
                <AlertMesSec />
            </div>
        );
    }
}

export default AlertMessage;