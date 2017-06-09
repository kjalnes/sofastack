import React from 'react';
import ProjectForm from '../components/Projects';
import ModelsList from '../components/Projects/ModelsList';
import { connect } from 'react-redux';
import { saveProjectName, downloadZip } from '../actions/project';
import { deleteModel } from '../actions/model';

const ProjectContainer = ({models, saveProject, name, deleteModel }) => {
    const clickZip = () => {
        downloadZip({ name, models })
    };
    return (
        <div id="page-content-wrapper">
            <div className="page-content">
                <div className="container-fluid">
                    <div className='row'>
                        <div className='well project-details'>
                            <ProjectForm
                                models={models}
                                saveProject={ saveProject }
                                name={name} />
                            <ModelsList
                                models={models}
                                clickZip={clickZip}
                                deleteModel={deleteModel} />
                        </div>
                    </div>
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
        saveProject: (project) => dispatch(saveProjectName(project)),
        deleteModel: (id) => dispatch(deleteModel(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
