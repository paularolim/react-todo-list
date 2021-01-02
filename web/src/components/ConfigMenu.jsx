import React, {useState} from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineSetting } from "react-icons/ai";

const ConfigMenu = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);

    function showMenu() {
        setMenuVisible(!menuVisible);
    }

    return (
        <>
            <ul
                className="menu"
                style={menuVisible ? { display: "block" } : { display: "none" }}
            >
                <li onClick={() => props.createGroup()}>
                    <AiOutlinePlus fill="#484B5D" size="20" />
                    <span>New group</span>
                </li>
                <li>
                    <AiOutlinePlus fill="#484B5D" size="20" />
                    <span>New list</span>
                </li>
                <li>
                    <BsPencil fill="#484B5D" size="20" />
                    <span>Edit list</span>
                </li>
                <li>
                    <BsTrash fill="#484B5D" size="20" />
                    <span>Delete list</span>
                </li>
            </ul>
            <button onClick={() => showMenu()}>
                <AiOutlineSetting fill="#E0E2EE" size="40" />
            </button>
        </>
    );
};

export default ConfigMenu;