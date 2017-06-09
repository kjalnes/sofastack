import React from 'react';


const Sidebar = () => {
    return (
        <div id="sidebar-wrapper">
            <nav id="spy">
                <ul className="sidebar-nav nav">
                    <li className="sidebar-brand">
                        <a href="#home"><span className="fa fa-home solo">Home</span></a>
                    </li>
                    <li>
                        <a href="#anch1">
                            <span className="fa fa-anchor solo">Model 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#anch2">
                            <span className="fa fa-anchor solo">Model 2</span>
                        </a>
                    </li>
                    <li>
                        <a href="#anch3">
                            <span className="fa fa-anchor solo">Model 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#anch4">
                            <span className="fa fa-anchor solo">Model 4</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
