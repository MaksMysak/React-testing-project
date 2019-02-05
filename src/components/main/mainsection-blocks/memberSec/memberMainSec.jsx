import React from 'react';
import {
  FaRegCheckCircle,
  FaPlusCircle,
  FaRegArrowAltCircleUp,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import paul from '../../../../images/main-section/paul.png';
import victoria from '../../../../images/main-section/victoria.png';
import joseph from '../../../../images/main-section/joseph.png';
import MemberRowRows from './memberRowRows';

const MemberMainSec = () => {
  const member = [
    {
      id: 'ac-1',
      memberFoto: <img className="member-photo" src={paul} alt="paul" />,
      memberName: 'Paul Robert Smit',
      memberLoc: ' Manhathan, United State',
      memberIconDone: <FaRegCheckCircle size="24px" color="#00ff37" />,
      memberIcon: <FaPlusCircle size="24px" />,
    },
    {
      id: 'ac-2',
      memberFoto: (
        <img className="member-photo" src={victoria} alt="victoria" />
      ),
      memberName: 'Victoria Campel',
      memberLoc: 'Barcelona, Spain',
      memberIconDone: <FaRegCheckCircle size="24px" color="#00ff37" />,
      memberIcon: <FaRegArrowAltCircleUp size="24px" />,
      memberNone: <div className="members-main-block-section-row-none" />,
      memberRows: <MemberRowRows />,
    },
    {
      id: 'ac-3',
      memberFoto: <img className="member-photo" src={joseph} alt="joseph" />,
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
            {row.memberFoto}
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
