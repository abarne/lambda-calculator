import React from 'react';

const SpecialButton = (props) => {
	return (
		<button className="button special">
			<span>{props.specials}</span>
		</button>
	);
};

export default SpecialButton;
