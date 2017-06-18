import React from 'react';

const Welcome = (prop)=>{
	return (
		<div>
			<div id="home-img">
				<p id="home-txt">Get your code ready</p>
				<button id="home-start" onClick={prop.toggleSidebar}>Start</button>
			</div>
			<div>
				
			</div>
		</div>
	)
}

export default Welcome;