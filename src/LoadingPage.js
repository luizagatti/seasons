import React from 'react';

const LoadingPage = props => {
	return (
		<div className="ui active dimmer">
			<div className="ui text loader">{props.text}</div>
		</div>
	);
}

LoadingPage.defaultProps = {
	text: 'Loading...'
}

export default LoadingPage;