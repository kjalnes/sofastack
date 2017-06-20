import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {showBubble: false}
        this.click = this.click.bind(this);
    }

    click() {
        this.setState({ showBubble: !this.state.showBubble });
        this.props.toggleSidebar();
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {
                    this.state.showBubble ?
                    <div className='speech-bubble'>
                        <div className='bubble-text'>
                            Hello!
                            Let us help you create your Javascript CRUD node app skeleton. We provide tooltips to help you understand what is generated. When you are done we will deploy the generated code to your GitHub.
                        </div>
                    </div>
                    : null
                }
                <div id="home-img">
                    <p id="home-txt">Cushioning for the lazy developer</p>
                    <button onClick={ ()=> this.click()} id="home-start">Start</button>
                </div>
            </div>
        )
    };
};

export default Welcome;
