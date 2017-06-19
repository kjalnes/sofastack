import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../components/global/Header';
import SidebarContainer from './SidebarContainer';
import HomePageContainer from './HomePageContainer';


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
                <div id="sidebar-wrapper">
                    <SidebarContainer />
                </div>
                <HomePageContainer />
                {this.props.children}
            </div>
        );
    }
};

export default AppContainer;
