/* eslint-disable import/no-unresolved */
import React from 'react';
import BackArrow from '@image/aside-navbar/back-arrow.png';
import Lettter from '@image/aside-navbar/lettter.png';
import Qwer from '@image/aside-navbar/qwer.png';
import Men from '@image/aside-navbar/men.png';

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
            src: Men,
            alt: 'men',
        },
    ];

    return (
        <div className="aside-navbar">
            {butt.map(({ src, alt }) => (
                <button className="aside-navbar-button" type="button">
                    <img className="aside-navbar-button-img" src={src} alt={alt} />
                </button>
            ))}
        </div>
    );
};

export default AsideNavbar;
