import React from 'react';
import {
    FaRegCheckCircle,
    FaPlusCircle,
    // FaRegArrowAltCircleUp,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import MemberRowRows from './memberRowRows';
import { getStorageItem } from '../../../../dataLocalStorage';

class MemberMainSec extends React.Component {
    render() {
        const users = getStorageItem('users');
        return (
            <div className="members-main-block-section">
                {users.map(({
                    id, photo, name, location, memberRows,
                }) => (
                    <div className="members-main-block-section-row" key={id}>
                        <div className="members-main-block-section-row-pht">
                            <img className="member-photo" src={photo} alt={photo} />
                        </div>
                        <div className="members-main-block-section-row-txt">
                            <h4>{name}</h4>
                            <div>
                                <FaMapMarkerAlt />
                                <p>
                                    <small>{location}</small>
                                </p>
                            </div>
                        </div>
                        <div className="members-main-block-section-row-icn">
                            <FaRegCheckCircle size="24px" color="#00ff37" />
                            <button
                                type="button"
                                onClick={this.handleClick}
                            >
                                <FaPlusCircle size="24px" color="#fff" />
                            </button>
                        </div>
                        { memberRows && <MemberRowRows />}
                    </div>
                ))}
            </div>
        );
    }
}

export default MemberMainSec;
