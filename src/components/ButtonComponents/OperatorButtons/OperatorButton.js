import React from 'react';

const OperatorButton = (props) => {
	return (
		<button>
			<span>{props.operators.value}</span>
		</button>
	);
};

export default OperatorButton;
