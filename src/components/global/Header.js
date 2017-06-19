import React from 'react';
import { connect } from 'react-redux';

const Header = ({toggleSidebar, name}) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-brand">
                        <a onClick={toggleSidebar} id="menu-toggle" href="#" className=" menu glyphicon glyphicon-align-justify btn-menu toggle">
                        </a>
                        <span className='titleAndSub'><a href="/" id='title'>SofaStack</a> <a id='sub'>Cushioning for the Lazy Dev</a></span>

                        {
                            name  ?  <span className='sofa-logo'>Logo</span> : null
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = ({name}) => ({ name });

export default connect(mapStateToProps)(Header);



