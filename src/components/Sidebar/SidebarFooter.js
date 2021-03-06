import React, { Component } from 'react';

const SidebarFooter = ({ models, clickZip, postToGit }) => {
  return (
        <div className="sidebar-footer">
            <br />
                { models.length ?
                <div className="footer-btns">
                    <div className="title-wrapper">
                        <h4 className="sidebar-title inline">Deploy Project</h4>
                    </div>
                    <button onClick={ clickZip } className="btn btn-custom-2 btn-default center-block btn-download">DOWNLOAD ZIP</button>
                    <button  onClick={ postToGit } className="btn btn-custom-2 btn-default center-block btn-download">DEPLOY TO GITHUB</button>
                </div>
                      :
                null
            }
        </div>
  );
};

export default SidebarFooter;
