import React from 'react';
import avatar from '../../images/aside-info/avatar.jpg';

class AsideInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('data')),
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div className="aside-info">
                <img className="avatar" src={avatar} alt="avatar" />
                <h5>Maksym Mysak</h5>
                <h6>Admin Manager</h6>
                <div className="aside-info-soc">
                    {data.socPart.map(({ foto, firstRow, secondRow }) => (
                        <div className="aside-info-soc-part">
                            <img src={foto} alt={foto} />
                            <h6>{firstRow}</h6>
                            <p>{secondRow}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default AsideInfo;
