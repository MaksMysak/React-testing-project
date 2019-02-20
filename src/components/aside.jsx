/* eslint-disable import/no-unresolved */
import React from 'react';
import AsideNavbar from '@components/aside/aside-navbar';
import AsideInfo from '@components/aside/aside-info';
import AsideMenu from '@components/aside/aside-menu';

const Aside = () => (
    <div className="aside">
        <AsideNavbar />
        <AsideInfo />
        <AsideMenu />
    </div>
);

export default Aside;
