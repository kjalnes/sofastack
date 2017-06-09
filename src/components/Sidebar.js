import React from 'react';

const Sidebar = () => {
    return (
        <div id="wrapper">
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div  class="navbar-brand">
                            <a id="menu-toggle" href="#" class="glyphicon glyphicon-align-justify btn-menu toggle">
                                <i class="fa fa-bars"></i>
                            </a>
                            <a href="#">Sofastack</a>
                        </div>
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </div><!--/.nav-collapse -->
                </div>
            </nav>
            <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <ul class="sidebar-nav nav">
                        <li class="sidebar-brand">
                            <a href="#home"><span class="fa fa-home solo">Home</span></a>
                        </li>
                        <li>
                            <a href="#anch1">
                                <span class="fa fa-anchor solo">Anchor 1</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch2">
                                <span class="fa fa-anchor solo">Anchor 2</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch3">
                                <span class="fa fa-anchor solo">Anchor 3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch4">
                                <span class="fa fa-anchor solo">Anchor 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            /* Page content */
            <div id="page-content-wrapper">
                <div class="page-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="panel panel-danger">
                                    <div class="panel-heading">
                                            Panel 1
                                    </div>
                                    <div class="panel-body">
                                        content body
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="panel panel-success">
                                    <div class="panel-heading">
                                            Panel 1
                                    </div>
                                    <div class="panel-body">
                                        content body
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
