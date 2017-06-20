import React from 'react';

const Welcome = ({toggleSidebar})=>{
	return (
		<div id="home-img">
			<p id="home-txt">Get your code ready</p>
			<button onClick={toggleSidebar} id="home-start">Start</button>
		</div>
	)
}

export default Welcome;
