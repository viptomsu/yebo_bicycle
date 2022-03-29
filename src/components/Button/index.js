import './Button.scss';

function Button({children, type, ...props}) {
	let btnClass = 'btn';
	if(typeof type === 'string') {
		btnClass += ' btn--' + type;
	} else if(Array.isArray(type)) {
		type.forEach(item => {
			btnClass += ' btn--' + type;
		})
	}
	return (
		<button className={btnClass} {...props} >
			{children}
		</button>
	)
}

export default Button;
