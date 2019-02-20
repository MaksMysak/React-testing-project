/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Section from '@mainBlocks/section';
import PieChart from '@mainBlocks/pieChart';
import Message from '@mainBlocks/message';
import Members from '@mainBlocks/members';
import AlertMessage from '@mainBlocks/alertMes';
import MediaTable from '@mainBlocks/mediaTable';
import UIElements from '@mainBlocks/UIElements';
import Buttons from '@mainBlocks/buttons';


class MainMainSection extends React.Component {
    render() {
        return (
            <div className="main-section">
                <Section />
                <PieChart />
                <Message />
                <Members />
                <AlertMessage />
                <MediaTable />
                <UIElements />
                <Buttons />
            </div>
        );
    }
}

export default MainMainSection;
