import React from 'react';
import ProjectForm from '../components/Projects';
import ModelsList from '../components/Projects/ModelsList';
import { connect } from 'react-redux';
import { saveProjectName, downloadZip } from '../actions/project';

const ProjectContainer = ({models, saveProject, name }) => {
    const clickZip = () => downloadZip({ name, models });
    return (
        <div>
            <div className='row'>
                <div className='well project-details center-block'>
                    <ProjectForm
                        models={models}
                        saveProject={ saveProject }
                        name={name} />
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
        name: state.name,
        models:state.models
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveProject: (project)=> dispatch(saveProjectName(project))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
