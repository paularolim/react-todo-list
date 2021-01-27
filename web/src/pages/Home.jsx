import React, { Component } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Lists from "../components/Lists";
import Group from "../components/Group";
import ModalMenu from "../components/ModalMenu";
import ModalAdvancedForm from "../components/ModalAdvancedForm";

import "./Home.css";

const URL = "http://localhost:8000/api/";

class Home extends Component {
    constructor(props) {
        super(props);

        this.createGroup = this.createGroup.bind(this);
        this.createList = this.createList.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = { user: 1, lists: [], groups: [], activeList: 1 };
    }

    componentDidMount() {
        this.refreshList();
        this.refreshGroups();
    }

    createGroup() {
        console.log("Creating group");
    }

    createList() {
        console.log("Creating list");
    }

    async refreshList() {
        const user = this.state.user;

        await axios.get(`${URL}${user}/lists`).then((response) => {
            this.setState({
                ...this.state,
                lists: response.data["lists"],
                activeList: response.data["lists"][0].id,
            });
        });
    }

    async refreshGroups(id = this.state.activeList) {
        await axios.get(`${URL}${id}/tasks`).then((response) => {
            this.setState({
                ...this.state,
                groups: response.data,
            });
        });
    }

    render() {
        const lists = this.state.lists;
        const groups = this.state.groups;

        return (
            <div className="home">
                <Navbar />

                <Lists lists={lists} />

                <main>
                    <Group groups={groups} />
                </main>

                <ModalAdvancedForm />
                
                <div className="modal-wrapper">
                    <ModalMenu
                        createGroup={this.createGroup}
                        createList={this.createList}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
