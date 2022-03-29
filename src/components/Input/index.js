import { useState } from 'react';
import './Input.scss';

function Input({ className, type, ...props }) {
	const [value, setValue] = useState('');

	let inputClass = 'input';
	if (className) {
		inputClass += ' ' + className;
	}

	return (
		<input
			className={inputClass}
			value={value}
			type={type}
			{...props}
			onChange={e => setValue(e.target.value)}
		/>
	)
}

export default Input;
