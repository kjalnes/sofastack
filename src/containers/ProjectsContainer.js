import React from 'react';
import ProjectForm from '../components/Projects';
import ModelsList from '../components/Projects/ModelsList';
import { connect } from 'react-redux';
import { saveProjectName, deleteProjectName, downloadZip } from '../actions/project';

const ProjectContainer = ({models, saveProject, deleteProject, name, project }) => {
    const clickZip = () => downloadZip({ name, models });
    return (
        <div>
            <div className='row'>
                <div className='well project-details center-block'>
                    <ProjectForm
                        models={models}
                        saveProject={ saveProject }
                        deleteProject={ deleteProject }
                        name={name}
                        project={project} />
                    <ModelsList
                        models={models}
                        clickZip={clickZip} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        project: state.project,
        name: state.name,
        models:state.models
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveProject: (project)=> dispatch(saveProjectName(project)),
        deleteProject: (project)=> dispatch(deleteProjectName(project))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
