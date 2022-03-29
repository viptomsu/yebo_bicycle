import './Italic.scss';

function Italic(props) {
	let combineClass = 'italic';
	if(props.className) {
		combineClass += ' ' + props.className;
	}
	return (
		<p className={combineClass}>{props.children}</p>
	)
}

export default Italic;
