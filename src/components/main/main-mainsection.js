import React from 'react';
import Section from './mainsection-blocks/section.js';
import PieChart from './mainsection-blocks/pieChart.js';
import Message from './mainsection-blocks/message.js';
import Members from './mainsection-blocks/members.js';
import AlertMessage from './mainsection-blocks/alertMes.js';
import MediaTable from './mainsection-blocks/mediaTable.js';
import UIElements from './mainsection-blocks/UIElements.js';
import Buttons from './mainsection-blocks/buttons.js';

class MainMainSection extends React.Component {
    render(){
        return(
            <div className="main-section">
                < Section />
                < PieChart />
                < Message />
                < Members />
                < AlertMessage />
                < MediaTable />
                < UIElements />
                < Buttons />
            </div>
        );
    }
}

export default MainMainSection;