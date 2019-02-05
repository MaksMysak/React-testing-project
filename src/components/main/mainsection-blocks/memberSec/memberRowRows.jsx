import React from 'react';

class MemberRowRows extends React.Component {
  render() {
    const row = [
      {
        id: 'ac-1',
        title: 'Email:',
        text: 'info@contact.com',
      },
      {
        id: 'ac-2',
        title: 'Site:',
        text: 'www.companyname.com',
      },
      {
        id: 'ac-3',
        title: 'Company:',
        text: 'CompanyName',
      },
      {
        id: 'ac-4',
        title: 'Plan:',
        text: 'Premium',
      },
      {
        id: 'ac-5',
        title: 'Messages:',
        text: '16',
      },
    ];

    return (
      <div className="members-main-block-section-row-rows">
        {row.map(rows => (
          <div className="row-rows" key={rows.id}>
            <h6>{rows.title}</h6>
            <h6>
              <small>{rows.text}</small>
            </h6>
          </div>
        ))}
      </div>
    );
  }
}

export default MemberRowRows;
