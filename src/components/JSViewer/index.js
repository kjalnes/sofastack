import React, { Component } from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import SequelizeModelFile from '../../../shared/build/project components/SequelizeModelFile';
import expressRouteGenerator from '../../../shared/codeGenrators/expressRouteGenrator';
import { Link, browserHistory } from 'react-router';
import dbIndexFile from '../../../shared/build/project components/dbIndexFile';

class JSEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { view: 'model' }
        this.editor = null;
        this.element = null;
        this.generateOutput = this.generateOutput.bind(this);
    };

    generateOutput(model) {
        let code = this.props.codeCat === 'sequelize' ?
            SequelizeModelFile(model).toString() :
            dbIndexFile(this.props.models).toString();
        this.editor.setValue(code);
            // expressRouteGenerator(model);
    };

    componentDidMount() {
        this.editor = ace.edit(this.element);
        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setMode('ace/mode/javascript');
        this.editor.setTheme('ace/theme/monokai');
        this.editor.setOptions({
            readOnly: true,
            hScrollBarAlwaysVisible: true,
            vScrollBarAlwaysVisible: true,
            minLines: 19,
            maxLines: 19
        });

        if(this.props.model) {
            console.log(this.props.model)
            this.generateOutput(this.props.model);
        }
    };

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.model !== this.props.model && nextProps.model !== undefined) {
            this.generateOutput(nextProps.model);
        }
    };

    componentWillUnmount() {
        this.editor.destroy();
    };

    render() {
        return (
            <div className='box'>
                <div ref={(el) => {this.element = el;}}></div>
            </div>
        )
    };
}

export default JSEditor;

