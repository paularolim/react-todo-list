import React from "react";

import "./Lists.css";

const Lists = (props) => {
    function getItems() {
        const lists = props.lists.data || [];

        return lists.map((list, index) => (
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
        ));
    }

    return <ul className="lists">{getItems()}</ul>;
};

export default Lists;
