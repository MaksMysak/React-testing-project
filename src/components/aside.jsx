import React from 'react';
import AsideNavbar from './aside/aside-navbar';
import AsideInfo from './aside/aside-info';
import AsideMenu from './aside/aside-menu';

const Aside = () => {
  return (
    <div className="aside">
      <AsideNavbar />
      <AsideInfo />
      <AsideMenu />
    </div>
  );
};

export default Aside;
