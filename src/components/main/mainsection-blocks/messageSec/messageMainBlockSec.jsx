/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import React from 'react';
import robert from '@image/main-section/robert.png';
import victoria from '@image/main-section/victoria.png';
import joseph from '@image/main-section/joseph.png';
import MessAdmin from './messAdminMes';
import MessButtonBlock from './messButtonBlock';

const MesMainSec = () => {
    const message = [
        {
            id: 'ac-1',
            messFoto: <img className="message-photo" src={victoria} alt="victoria" />,
            messName: 'Victoria Campel',
            messOn: 'twitter / 6 hours ago',
            messTxt:
        'elit. A ab ipsam repellendus vero! Accusantium animi architecto at dicta, doloribus, expedita illum itaque iusto laboriosam obcaecati, placeat qui rem soluta tempore!',
            messAn: <MessButtonBlock />,
        },
        {
            id: 'ac-2',
            messFoto: <img className="message-photo" src={joseph} alt="joseph" />,
            messName: 'Jozef Lewis',
            messOn: 'twitter / 2 day ago',
            messTxt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam fuga ex dolorum neque eligendi ducimus enim sunt ipsam architecto molestiae!',
        },
        {
            id: 'ac-3',
            messFoto: <img className="message-photo" src={robert} alt="robert" />,
            messName: 'Robert Smith',
            messOn: 'twitter / 2 days ago',
            messTxt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam fuga ex dolorum neque eligendi ducimus enim sunt ipsam architecto molestiae!',
            messAn: <MessAdmin />,
        },
    ];

    return (
        <div className="message-main-block-section">
            {message.map(sec => (
                <div className="message-main-block-section-row" key={sec.id}>
                    <div className="message-main-block-row-img">{sec.messFoto}</div>
                    <div className="message-main-block-row-txt">
                        <div className="name-of-message">
                            <h4>{sec.messName}</h4>
                            <p>
                                <small>{sec.messOn}</small>
                            </p>
                        </div>
                        <div className="message">
                            <p>
                                <small>{sec.messTxt}</small>
                            </p>
                        </div>
                        {sec.messAn}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MesMainSec;
