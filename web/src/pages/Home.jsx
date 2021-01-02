import React, { Component, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Lists from "../components/Lists";
import Group from "../components/Group";
import ConfigMenu from "../components/ConfigMenu";

import "./Home.css";

const URL = "http://localhost:8000/api/";

class Home extends Component {
    constructor(props) {
        super(props);

        this.createGroup = this.createGroup.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = { lists: [], activeList: null };
    }

    componentDidMount() {
        this.refreshList();
        this.refreshGroups();
    }

    createGroup() {
        console.log("Creating group");
    }

    refreshList() {
        axios.get(`${URL}lists`).then((response) => {
            this.setState({
                ...this.state,
                lists: response.data,
                activeList: response.data.data[0].id || null
            });
        });
    }

    render() {
        return (
            <div className="home">
                <Navbar />

                <Lists lists={this.state.lists} />

                {/* <main>
                <Group group={group1} tasks={tasks} />
                <Group group={group2} tasks={[]} />
                <Group group={group2} tasks={[]} />
                <Group group={group2} tasks={[]} />
                <Group group={group2} tasks={[]} />
            </main> */}
                <div className="modal-wrapper">
                    <ConfigMenu createGroup={this.createGroup} />
                </div>
            </div>
        );
    }
}

export default Home;
