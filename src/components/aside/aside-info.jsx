import React from 'react';
import avatar from '../../images/aside-info/avatar.jpg';
import men from '../../images/aside-info/men.png';
import plane from '../../images/aside-info/plane.png';
import eye from '../../images/aside-info/eye.png';

const AsideInfo = () => {
    const socPart = [
        {
            foto: <img src={men} alt="men" />,
            firstRow: '26k+',
            secondRow: '+14',
        },
        {
            foto: <img src={plane} alt="plane" />,
            firstRow: '1095',
            secondRow: '+56',
        },
        {
            foto: <img src={eye} alt="eye" />,
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
                {socPart.map(info => (
                    <div className="aside-info-soc-part">
                        {info.foto}
                        <h6>{info.firstRow}</h6>
                        <p>{info.secondRow}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AsideInfo;
