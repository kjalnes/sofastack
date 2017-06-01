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
        return (
            <div className=''>
                <h3>Project Overview</h3>
                <div className='row'>
                    { this.state.showInput ?
                        <div className='col-xs-12'>
                            <input
                            onChange={this.onChange}
                            className='form-control inline project-name'
                            value={this.state.name}
                            placeholder='Project name'/>
                            <button onClick={this.saveProject} className='btn btn-default project-save-btn'>Save</button>
                        </div>
                        :
                        <div className='col-xs-12'>
                            <h4 className='inline'>{this.state.name}</h4>
                            <button onClick={this.toggleInput} type='button' className='btn btn-default'><span className="glyphicon glyphicon-pencil"></span></button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default ProjectForm;

