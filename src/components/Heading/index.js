import './Heading.scss';

function Heading({children, tag, className, ...props}) {
	const headingClass = `heading ${className} ${props.size === 'big' ? 'heading--big' : ''}`;
	const TagName = tag || 'h3';
	return (
		<TagName
			className={headingClass}
			{...props}
		>
			{children}
		</TagName>
	)
}

export default Heading;
