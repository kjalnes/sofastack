import React from 'react';
import Welcome from '../components/global/Welcome';
import { connect } from 'react-redux';
import { saveModel, updateModel } from '../actions/model';
import { setActiveModel } from '../actions/project';

const HomePageContainer = (props) => {
    const { models, active, name, toggleSidebar } = props;
    return (
        <div>
        { !name&&!models.length ?
            <Welcome toggleSidebar={toggleSidebar} />:null
        }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    models: state.models,
    active: state.active,
    name: state.name

});

export default connect(mapStateToProps)(HomePageContainer);
