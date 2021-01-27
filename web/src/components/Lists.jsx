import React from "react";

import "./Lists.css";

const Lists = (props) => {
    const lists = props.lists || [];

    return (
        <ul className="lists">
            {lists.map((list, index) => (
                <li
                    className="list-item"
                    key={index}
                    style={{
                        backgroundColor: `#${list.background_color}`,
                        color: `#${list.font_color}`,
                    }}
                >
                    {list.description}
                </li>
            ))}
        </ul>
    );
};

export default Lists;
