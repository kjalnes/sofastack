import React, { Component } from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import sequelizeGenerator from '../../../shared/codeGenrators/sequelizeGenrator';
import expressRouteGenerator from '../../../shared/codeGenrators/expressRouteGenrator';
import { Link, browserHistory } from 'react-router';


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
            sequelizeGenerator(model) :
            expressRouteGenerator(model);
        this.editor.setValue(code);
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
            this.generateOutput(this.props.model);
        }
    };

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.model !== this.props.model && nextProps.model === undefined) {

            // console.log('this.props.model', this.props.model)
            // console.log('nextProps.model', nextProps.model)
            // console.log('this.props.active', this.props.active);
            browserHistory.push(`/`);
        }
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

