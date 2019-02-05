import React from 'react';
import UniHeader from "./../../../components/main/mainsection-blocks/UniHeader.js";
import MemberMainSec from "./../../../components/main/mainsection-blocks/memberSec/memberMainSec.js";


import { FaUndo } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

class Members extends React.Component {
    render(){
        this.state = {
            mainLeftIco:<FaUserAlt size="24px" />,
            nameBlock:"Members",
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
                <div className="members-block-section-buttons">
                    <div className="members-block-section-buttons-txt">
                        <h6><small>Total users</small></h6>
                        <h6>184,036</h6>
                    </div>
                    <div className="members-block-section-buttons-but">
                        <h6><small>Sort by</small></h6>
                        <i className="fas fa-arrow-down"></i>
                    </div>
                </div>
                <MemberMainSec />
                <div className="members-main-block-section-bottom-btn">
                        <div className="members-main-block-section-bottom-button">
                            <FaPlus />
                            <h6>Load More...</h6>
                        </div>
                        <div className="members-main-block-section-bottom-button">
                            <FaSearchPlus />
                            <h6>Search...</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default Members;