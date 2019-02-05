import React from 'react';
import {
  FaHome,
  FaSlidersH,
  FaComments,
  FaCommentAlt,
  FaEdit,
  FaTh,
  FaTable,
  FaChartBar,
  FaCog,
} from 'react-icons/fa';

const AsideMenu = () => {
  const rows = [
    {
      id: 'ac-1',
      imgUrl: <FaHome />,
      labelText: 'Dashboard',
    },
    {
      id: 'ac-2',
      imgUrl: <FaSlidersH />,
      labelText: 'UI Elements',
    },
    {
      id: 'ac-3',
      imgUrl: <FaCommentAlt />,
      labelText: 'Simple Pages',
    },
    {
      id: 'ac-4',
      imgUrl: <FaComments />,
      labelText: 'Messages',
    },
    {
      id: 'ac-5',
      imgUrl: <FaEdit />,
      labelText: 'Forms',
    },
    {
      id: 'ac-6',
      imgUrl: <FaTh />,
      labelText: 'Grid Layout',
    },
    {
      id: 'ac-7',
      imgUrl: <FaTable />,
      labelText: 'Tables',
    },
    {
      id: 'ac-8',
      imgUrl: <FaChartBar />,
      labelText: 'Satatistics',
    },
    {
      id: 'ac-9',
      imgUrl: <FaCog />,
      labelText: 'Support',
    },
  ];

  return (
    <section className="aside-menu">
      {rows.map(row => (
        <div className="aside-menu-row" key={row.id}>
          <input id={row.id} name="dashboard" type="checkbox" />
          <label htmlFor={row.id}>
            {row.imgUrl}
            <p>{row.labelText}</p>
          </label>
          <article />
        </div>
      ))}
    </section>
  );
};

export default AsideMenu;
