import React from 'react';
import MainNavbar from './main/main-navbar';
import MainDashboard from './main/main-dashboard';
import MainMainSection from './main/main-mainsection';

const Main = () => {
  return (
    <div className="main">
      <MainNavbar />
      <MainDashboard />
      <MainMainSection />
    </div>
  );
};

export default Main;
