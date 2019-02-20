/* eslint-disable import/no-unresolved */
import React from 'react';
import MainNavbar from '@components/main/main-navbar';
import MainDashboard from '@components/main/main-dashboard';
import MainMainSection from '@components/main/main-mainsection';

const Main = () => (
    <div className="main">
        <MainNavbar />
        <MainDashboard />
        <MainMainSection />
    </div>
);

export default Main;
