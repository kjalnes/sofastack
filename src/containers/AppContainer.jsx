import React from 'react';
import {connect} from 'react-redux';

const AppContainer = ({children}) => {


  return (
  <div>
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Sofa Stack - Cushioning for the Lazy Dev</a>
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
