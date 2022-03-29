import './Grid.scss';

function Grid(props) {
	const items = props.items || [];
	return (
		<div className="grid">
			{items.map((item, i) =>{
				return <div
					key={i}
					className={`grid__item item-${i + 1}`}
				>
					{item}
				</div>}
			)}
		</div>
	)
}

export default Grid;
