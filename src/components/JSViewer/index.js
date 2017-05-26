import React, { Component } from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import sequelizeGenerator from '../../../shared/codeGenrators/sequelizeGenrator';
import expressRouteGenerator from '../../../shared/codeGenrators/expressRouteGenrator';

class JSViewer extends Component {
    constructor(props) {
        console.log('JSViewer props', props)
        super(props);
        this.state = { view: 'model' }
        this.editor = null;
        this.element = null;
        this.generateCode = this.generateCode.bind(this);
        this.generateOutput = this.generateOutput.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    generateCode(fn, model) {
        return fn(model);
    }

    generateOutput(model, view) {
        let code = view === 'model'
        ? this.generateCode(sequelizeGenerator, model)
        : this.generateCode(expressRouteGenerator, model);
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
        this.editor.setTheme('ace/theme/solarized_light');
        this.editor.setOptions({
            readOnly: true,
            hScrollBarAlwaysVisible: true,
            vScrollBarAlwaysVisible: true,
            minLines: 19,
            maxLines: 20
        });

        if(this.props.model) {
            this.generateOutput(this.props.model, this.state.view);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log("this.props", this.props)
        // console.log("nextProps", nextProps)
        if(nextProps.model !== this.props.model) {
            this.generateOutput(nextProps.model, this.state.view);
        }
        if(nextState.view !== this.state.view) {
            this.generateOutput(this.props.model, nextState.view);
        }
    }

    componentDidUpdate() {
        // console.log('this.props js viewer', this.props)

    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    render() {
        const classNameModels = this.state.view === 'models' ? 'active' : '';
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

