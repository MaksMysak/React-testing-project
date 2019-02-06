import React from 'react';
import BackArrow from '../../images/aside-navbar/back-arrow.png';
import Lettter from '../../images/aside-navbar/lettter.png';
import Qwer from '../../images/aside-navbar/qwer.png';
import Mens from '../../images/aside-navbar/mens.png';

const AsideNavbar = () => {
    const butt = [
        {
            buttonImg: <img className="aside-navbar-button-img" src={BackArrow} alt="strilka" />,
        },
        {
            buttonImg: <img className="aside-navbar-button-img" src={Lettter} alt="lettter" />,
        },
        {
            buttonImg: <img className="aside-navbar-button-img" src={Qwer} alt="qwer" />,
        },
        {
            buttonImg: <img className="aside-navbar-button-img" src={Mens} alt="mens" />,
        },
    ];

    return (
        <div className="aside-navbar">
            {butt.map(button => (
                <button className="aside-navbar-button" type="button">
                    {button.buttonImg}
                </button>
            ))}
        </div>
    );
};

export default AsideNavbar;
