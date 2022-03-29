import './Section.scss';

function Section({children, className, ...props}) {
	return (
		<section
			className={className + ' section'}
			{...props}
		>
			{children}
		</section>
	)
}

export default Section;
