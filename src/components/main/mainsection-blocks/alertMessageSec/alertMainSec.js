import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { FaBan } from "react-icons/fa";

class AlertMesSec extends React.Component {

    render(){
        const alert=[
        {
            id: "ac-1", 
            alerIcn: <FaCheckCircle color="#00ff37" size="24px"/>, 
            alerTxt: "Success! The page has been..."
        },
        {
            id: "ac-2", 
            alerIcn: <FaExclamationTriangle color="#fad504" size="24px"/>, 
            alerTxt: "Warning! Your monthly trafic..."
        },
        {
            id: "ac-3", 
            alerIcn: <FaExclamationCircle color="#00307e" size="24px"/>, 
            alerTxt: "(Info) You have 6 unread mess..."
        },
        {
            id: "ac-4", 
            alerIcn: <FaBan color="#f85959" size="24px"/>, 
            alerTxt: "Eror! The Chart page has..."
        }
        ]

        return(
            <div className="main-section-block-section">
                {alert.map(alrt => (
                    <div className="alert-main-block-section-items" key={alrt.id}>
                        <div className="alert-main-block-section-items-img">
                            {alrt.alerIcn}
                        </div>
                        <div className="alert-main-block-section-items-txt">
                            <h6>{alrt.alerTxt}</h6>
                        </div>
                        <div className="alert-main-block-section-items-icn">
                            <FaWindowClose/>
                        </div>
                    </div>)
                    )}
            </div>  
        );
    }
}

export default AlertMesSec;