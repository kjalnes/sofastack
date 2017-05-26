import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <div>
            <div className='row'>
                <div className='col-xs-12'>
                    <h3>Your models</h3>
                    <ul>
                    { props.models ?
                        props.models.map( (model, index) => {
                            return <Link to={model.id} key={index}>{model.name}</Link>
                        })
                        : null
                    }
                    </ul>
                    { props.models.length ?
                        <button className='btn btn-default'>Download zip</button>
                        : null
                    }
                    <button><Link to='create'>Add new model</Link></button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        models: state.models
    }
}

export default connect(mapStateToProps)(Home);
