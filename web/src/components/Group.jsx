import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";

import "./Group.css";

const Group = (props) => {
    const { group } = props;
    const { tasks } = props;

    return (
        <div className="group">
            <div className="title" style={{backgroundColor: group.background_color}}>
                <h2 style={{color: group.font_color}}>{group.description}</h2>
            </div>
            <div className="content">
                {tasks.map((task, index) => {
                    return (
                        <div className="task" key={index}>
                            <div className="input-wrapper">
                                <input type="checkbox" name="task" id={task.description.replace(' ', '')} checked={task.status ? 'checked' : ''} />
                                <label htmlFor={task.description.replace(' ', '')}>{task.description}</label>
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
    );
};

export default Group;
