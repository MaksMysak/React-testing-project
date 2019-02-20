/* eslint-disable import/no-unresolved */
import React from 'react';
import {
    FaRegCheckCircle,
    FaPlusCircle,
    FaRegArrowAltCircleUp,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import paul from '@image/main-section/paul.png';
import victoria from '@image/main-section/victoria.png';
import joseph from '@image/main-section/joseph.png';
import MemberRowRows from './memberRowRows';

const MemberMainSec = () => {
    const member = [
        {
            id: 'ac-1',
            memberFotoSrc: paul,
            memberFotoAlt: 'paul',
            memberName: 'Paul Robert Smit',
            memberLoc: ' Manhathan, United State',
            memberIconDone: <FaRegCheckCircle size="24px" color="#00ff37" />,
            memberIcon: <FaPlusCircle size="24px" />,
        },
        {
            id: 'ac-2',
            memberFotoSrc: victoria,
            memberFotoAlt: 'victoria',
            memberName: 'Victoria Campel',
            memberLoc: 'Barcelona, Spain',
            memberIconDone: <FaRegCheckCircle size="24px" color="#00ff37" />,
            memberIcon: <FaRegArrowAltCircleUp size="24px" />,
            memberNone: <div className="members-main-block-section-row-none" />,
            memberRows: <MemberRowRows />,
        },
        {
            id: 'ac-3',
            memberFotoSrc: joseph,
            memberFotoAlt: 'joseph',
            memberName: 'Joseph Lewis',
            memberLoc: 'London, United Kingdom',
            memberIcon: <FaPlusCircle size="24px" />,
        },
    ];

    return (
        <div className="members-main-block-section">
            {member.map(row => (
                <div className="members-main-block-section-row" key={row.id}>
                    <div className="members-main-block-section-row-pht">
                        <img className="member-photo" src={row.memberFotoSrc} alt={row.memberFotoAlt} />
                    </div>
                    <div className="members-main-block-section-row-txt">
                        <h4>{row.memberName}</h4>
                        <div>
                            <FaMapMarkerAlt />
                            <p>
                                <small>{row.memberLoc}</small>
                            </p>
                        </div>
                    </div>
                    <div className="members-main-block-section-row-icn">
                        {row.memberIconDone}
                        {row.memberIcon}
                    </div>
                    {row.memberNone}
                    {row.memberRows}
                </div>
            ))}
        </div>
    );
};

export default MemberMainSec;
