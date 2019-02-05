import React from 'react';
import Section from './mainsection-blocks/section';
import PieChart from './mainsection-blocks/pieChart';
import Message from './mainsection-blocks/message';
import Members from './mainsection-blocks/members';
import AlertMessage from './mainsection-blocks/alertMes';
import MediaTable from './mainsection-blocks/mediaTable';
import UIElements from './mainsection-blocks/UIElements';
import Buttons from './mainsection-blocks/buttons';

const MainMainSection = () => {
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
};

export default MainMainSection;
