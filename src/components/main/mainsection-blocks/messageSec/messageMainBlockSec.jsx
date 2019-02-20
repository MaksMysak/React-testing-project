/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React from 'react';
import MessButtonBlock from './messButtonBlock';
import MessAdmin from './messAdminMes';
import { getStorageItem } from '../../../../dataLocalStorage';

const MesMainSec = () => {
    const users = getStorageItem('users');
    return (
        <div className="message-main-block-section">
            {users.map(({
                id, photo, name, time, messTxt, messbutt, adminMess,
            }) => (
                <div className="message-main-block-section-row" key={id}>
                    <div className="message-main-block-row-img">
                        <img className="message-photo" src={photo} alt={photo} />
                    </div>
                    <div className="message-main-block-row-txt">
                        <div className="name-of-message">
                            <h4>{name}</h4>
                            <p>
                                <small>{time}</small>
                            </p>
                        </div>
                        <div className="message">
                            <p>
                                <small>{messTxt}</small>
                            </p>
                        </div>
                        { messbutt && <MessButtonBlock />}
                        { adminMess && <MessAdmin />}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MesMainSec;
