import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../components/global/Header';
import Sidebar from '../components/global/Sidebar';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { showSidebar: true }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.setState({ showSidebar: !this.state.showSidebar });
    }

    render() {
        const sidebarClass = this.state.showSidebar ? 'active' : '';
        return (
            <div id="wrapper" className={sidebarClass}>
                <Header toggleSidebar={this.toggleSidebar} />
                <Sidebar />
                {this.props.children}
            </div>
        );
    }
};

export default AppContainer;
