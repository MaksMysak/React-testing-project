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
        this.state = { isExpanded: {} }; const { currentTarget: { id } } = e;
        this.setState({ isExpanded: { ...isExpanded, [id]: !isExpanded[id] } });
        console.log(isExpanded);
    }

    render() {
        const rows = [
            {
                id: '1',
                imgUrl: <FaHome />,
                labelText: 'Dashboard',
            },
            {
                id: '2',
                imgUrl: <FaSlidersH />,
                labelText: 'UI Elements',
            },
            {
                id: '3',
                imgUrl: <FaCommentAlt />,
                labelText: 'Simple Pages',
            },
            {
                id: '4',
                imgUrl: <FaComments />,
                labelText: 'Messages',
            },
            {
                id: '5',
                imgUrl: <FaEdit />,
                labelText: 'Forms',
            },
            {
                id: '6',
                imgUrl: <FaTh />,
                labelText: 'Grid Layout',
            },
            {
                id: '7',
                imgUrl: <FaTable />,
                labelText: 'Tables',
            },
            {
                id: '8',
                imgUrl: <FaChartBar />,
                labelText: 'Satatistics',
            },
            {
                id: '9',
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
                    { isExpanded[id] && (
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
