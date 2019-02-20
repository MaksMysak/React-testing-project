import React from 'react';
import {
    FaLongArrowAltLeft,
    FaStar,
    FaTrashAlt,
    FaArrowUp,
} from 'react-icons/fa';

const MessButtonBlock = () => {
    const messButton = [
        {
            itemIcon: <FaLongArrowAltLeft />,
            itemTxt: 'Reply',
        },
        {
            itemIcon: <FaStar />,
            itemTxt: 'Favorites',
        },
        {
            itemIcon: <FaTrashAlt />,
            itemTxt: 'Delete',
        },
        {
            itemIcon: <FaArrowUp />,
        },
    ];

    return (
        <div className="message-buttons">
            {messButton.map(items => (
                <div className="message-buttons-items">
                    {items.itemIcon}
                    <p>
                        <small>{items.itemTxt}</small>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default MessButtonBlock;
