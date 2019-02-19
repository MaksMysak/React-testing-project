/* eslint-disable react/prefer-stateless-function */
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

class AsideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: '' };
    }

    handleToggle = e => {
        const { isExpanded } = this.state;
        if (isExpanded !== e.currentTarget.id) {
            this.setState({ isExpanded: e.currentTarget.id });
        } else {
            this.setState({ isExpanded: 'null' });
        }
        console.log(this.state);
    }

    render() {
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

        const { isExpanded } = this.state;
        return (
            rows.map(({ id, imgUrl, labelText }) => (
                <div className="aside-menu">
                    <div
                        className="collapsible-header"
                        role="button"
                        tabIndex={0}
                        onClick={this.handleToggle}
                        id={id}
                        onKeyDown=""
                        onKeyUp=""
                        key={id}
                    >
                        {imgUrl}
                        <h3>{labelText}</h3>
                    </div>
                    { isExpanded === id && (
                        <div className="collapsible-panel">
                            <div className="panel-body" />
                        </div>
                    )}
                </div>
            ))
        );
    }
}

export default AsideMenu;
