import React, { Component } from 'react';
import { Link } from 'react-router';
import ModelsList from './ModelsList';
import uuidV4 from 'uuid/v4';

class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            showBtn: false,
            showInput: true
        };
        this.saveProject = this.saveProject.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleInput = this.toggleInput.bind(this);
    }

    onChange(ev) {
        this.setState({ name : ev.target.value });
    }

    toggleInput() {
        this.setState({ showInput: !this.state.showInput });
    }

    // save project to redux store
    saveProject() {
        this.props.saveProject(this.state.name);
        this.toggleInput();
    }

    componentWillMount() {
        if(this.props.name) {
            this.setState({ name: this.props.name });
            this.toggleInput();
        }
    }

    render() {
        const classNameTitle = this.props.name ? 'hide' : 'sidebar-title';
        return (
            <div className=''>
                <div className=''>
                    { this.state.showInput ?
                        <div className='project-detail'>
                        <h4 className='sidebar-title'>Your Project</h4>
                            <input
                            onChange={this.onChange}
                            className='form-control inline project-name'
                            value={this.state.name}
                            placeholder='Project name'/>
                            <span onClick={this.saveProject} className='glyphicon glyphicon-plus'></span>
                        </div>
                        :
                        <div className='project-name'>
                            <h4 className='inline'>{this.state.name}</h4>
                            <span onClick={this.toggleInput} className="glyphicon glyphicon-pencil"></span>
                            <hr className='custom-hr' />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default ProjectForm;

