import React from 'react';
import BackArrow from '../../images/aside-navbar/back-arrow.png';
import Lettter from '../../images/aside-navbar/lettter.png';
import Qwer from '../../images/aside-navbar/qwer.png';
import Mens from '../../images/aside-navbar/mens.png';

const AsideNavbar = () => {
    const butt = [
        {
            src: BackArrow,
            alt: 'BackArrow',
        },
        {
            src: Lettter,
            alt: 'Lettter',
        },
        {
            src: Qwer,
            alt: 'qwer',
        },
        {
            src: Mens,
            alt: 'mens',
        },
    ];

    return (
        <div className="aside-navbar">
            {butt.map(button => (
                <button className="aside-navbar-button" type="button">
                    <img className="aside-navbar-button-img" src={button.src} alt={button.alt} />
                </button>
            ))}
        </div>
    );
};

export default AsideNavbar;
