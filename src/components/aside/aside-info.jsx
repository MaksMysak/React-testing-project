/* eslint-disable import/no-unresolved */
import React from 'react';
import avatar from '@image/aside-info/avatar.jpg';
import men from '@image/aside-info/men.png';
import plane from '@image/aside-info/plane.png';
import eye from '@image/aside-info/eye.png';

const AsideInfo = () => {
    const socPart = [
        {
            photo: men,
            firstRow: '26k+',
            secondRow: '+14',
        },
        {
            photo: plane,
            firstRow: '1095',
            secondRow: '+56',
        },
        {
            photo: eye,
            firstRow: '428',
            secondRow: '+38',
        },
    ];
    return (
        <div className="aside-info">
            <img className="avatar" src={avatar} alt="avatar" />
            <h5>Maksym Mysak</h5>
            <h6>Admin Manager</h6>
            <div className="aside-info-soc">
                {socPart.map(({ photo, firstRow, secondRow }) => (
                    <div className="aside-info-soc-part">
                        <img src={photo} alt={photo} />
                        <h6>{firstRow}</h6>
                        <p>{secondRow}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AsideInfo;
