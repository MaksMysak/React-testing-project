import React from 'react';
import UniHeader from "./../../../components/main/mainsection-blocks/UniHeader.js";
import { FaChartBar } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

class Section extends React.Component {
    render(){
        this.state = {
            mainLeftIco:<FaChartBar size="24px" />,
            nameBlock:"Section",
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
                        
                </div>
            </div>
        );
    }
}
    
export default Section;