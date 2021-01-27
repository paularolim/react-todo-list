import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineSetting } from "react-icons/ai";

import "./Group.css";

const Group = (props) => {
    const groups = props.groups || [];

    return groups.map((group, index) => (
        <div className="group" key={index}>
            <div
                className="title"
                style={{ backgroundColor: groups.background_color }}
            >
                <h2 style={{ color: groups.font_color }}>
                    {group.description}
                </h2>
            </div>
            <div className="actions">
                <div className="actions-btn">
                    <AiOutlinePlus fill="#e0e2ee" size={25} />
                </div>
                <div className="actions-btn">
                    <AiOutlineSetting fill="#e0e2ee" size={25} />
                </div>
            </div>

            <div className="content">
                {group.task.map((task, index) => {
                    return (
                        <div className="task" key={index}>
                            <div className="input-wrapper">
                                <input
                                    type="checkbox"
                                    name="task"
                                    id={task.description.replace(" ", "")}
                                    checked={task.status ? "checked" : ""}
                                    onChange={(event) => event.target.checked}
                                />
                                <label
                                    htmlFor={task.description.replace(" ", "")}
                                >
                                    {task.description}
                                </label>
                            </div>

                            <div className="icons-group">
                                <BsPencil size="20" />
                                <BsTrash size="20" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    ));
};

export default Group;
