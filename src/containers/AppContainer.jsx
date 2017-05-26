import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

const AppContainer = ({children}) => {
// <a className="navbar-brand" href="/"><span className='logo'>SOFA STACK</span></a>
  return (
  <div>
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
        <Link className="navbar-brand" to='/'>SOFA STACK  - Cushioning for the Lazy Dev</Link>
    </div>
    <ul className="nav navbar-nav" />
  </div>
</nav>
  <div className="container">
    {children}
  </div>
</div>
  );

};

export default AppContainer;
