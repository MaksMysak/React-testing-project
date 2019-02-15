/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React from 'react';
import MessButtonBlock from './messButtonBlock';
import MessAdmin from './messAdminMes';
// import robert from '../../../../images/main-section/robert.png';
// import victoria from '../../../../images/main-section/victoria.png';
// import joseph from '../../../../images/main-section/joseph.png';

class MesMainSec extends React.Component {
    // const message = [
    //     {
    //         id: 'ac-1',
    //         messFoto: victoria,
    //         messName: 'Victoria Campel',
    //         messOn: 'twitter / 6 hours ago',
    //         messTxt:
    //         'elit. A ab ipsam repellendus vero! Accusantium animi architecto at dicta, doloribus, expedita illum itaque iusto laboriosam obcaecati, placeat qui rem soluta tempore!',
    //         messAn: <MessButtonBlock />,
    //     },
    //     {
    //         id: 'ac-2',
    //         messFoto: joseph,
    //         messName: 'Jozef Lewis',
    //         messOn: 'twitter / 2 day ago',
    //         messTxt:
    //         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam fuga ex dolorum neque eligendi ducimus enim sunt ipsam architecto molestiae!',
    //     },
    //     {
    //         id: 'ac-3',
    //         messFoto: robert,
    //         messName: 'Robert Smith',
    //         messOn: 'twitter / 2 days ago',
    //         messTxt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam fuga ex dolorum neque eligendi ducimus enim sunt ipsam architecto molestiae!',
    //         messAn: <MessAdmin />,
    //     },
    // ];
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('data')),
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div className="message-main-block-section">
                {data.users.map(sec => (
                    <div className="message-main-block-section-row" key={sec.id}>
                        <div className="message-main-block-row-img">
                            <img className="message-photo" src={sec.photo} alt={sec.photo} />
                        </div>
                        <div className="message-main-block-row-txt">
                            <div className="name-of-message">
                                <h4>{sec.name}</h4>
                                <p>
                                    <small>{sec.time}</small>
                                </p>
                            </div>
                            <div className="message">
                                <p>
                                    <small>{sec.messTxt}</small>
                                </p>
                            </div>
                            { sec.messbutt && <MessButtonBlock />}
                            { sec.adminMess && <MessAdmin />}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MesMainSec;
