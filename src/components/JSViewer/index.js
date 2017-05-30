import React, { Component } from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import sequelizeGenerator from '../../../shared/codeGenrators/sequelizeGenrator';
import expressRouteGenerator from '../../../shared/codeGenrators/expressRouteGenrator';

class JSViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { view: 'model' }
        this.editor = null;
        this.element = null;
        this.generateOutput = this.generateOutput.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    generateOutput(model, view) {
        let code = view === 'model' ?
            sequelizeGenerator(model) :
            expressRouteGenerator(model);
        this.editor.setValue(code);
    }

    onClick(view, ev) {
        ev.preventDefault();
        this.setState({view});
    }

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
            this.generateOutput(this.props.model, this.state.view);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.model !== this.props.model) {
            this.generateOutput(nextProps.model, this.state.view);
        }
        if(nextState.view !== this.state.view) {
            this.generateOutput(this.props.model, nextState.view);
        }
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    render() {
        const classNameModels = this.state.view === 'model' ? 'active' : '';
        const classNameRoutes = this.state.view === 'routes' ? 'active' : '';
        return (
            <div className='col-xs-6 box'>
                <h3>JavaScript</h3>
                <ul className="nav nav-tabs">
                  <li onClick={ this.onClick.bind(null, 'model')} className={classNameModels}><a href="#">Model</a></li>
                  <li onClick={ this.onClick.bind(null, 'routes')} className={classNameRoutes}><a href="#">Routes</a></li>
                </ul>
                <div ref={(el) => {this.element = el;}}></div>
            </div>
        )
    }
}

export default JSViewer;

