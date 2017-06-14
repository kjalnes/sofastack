import React from 'react';
import { browserHistory, Link } from 'react-router';
import ProjectForm from '../components/Project';
import ModelsList from '../components/Project/ModelsList';
import { connect } from 'react-redux';
import { saveProjectName, downloadZip, setActiveModel } from '../actions/project';
import { deleteModel } from '../actions/model';

const SidebarContainer = (props) => {

    const {  name, models, active, saveProject, deleteModel, setActiveModel } = props;

    const clickZip = () => downloadZip({ name, models });

    const addModel = () => {
        setActiveModel(null);
        browserHistory.push('/create');
    };

    return (
            <div className=''>
                <ProjectForm
                    models={models}
                    saveProject={saveProject}
                    name={name} />
                <ModelsList
                    active={active}
                    name={name}
                    models={models}
                    clickZip={clickZip}
                    deleteModel={deleteModel}
                    setActiveModel={setActiveModel}
                    addModel={addModel}/>

            </div>
    )
};

const mapStateToProps = (state) => ({
    name: state.name,
    models:state.models,
    active: state.active
});

const mapDispatchToProps = (dispatch) => ({
    saveProject: (project) => dispatch(saveProjectName(project)),
    deleteModel: (id) => dispatch(deleteModel(id)),
    setActiveModel: (id) => dispatch(setActiveModel(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
