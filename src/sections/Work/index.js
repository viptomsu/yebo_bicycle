import { useState } from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { bikes } from './constants';
import './Work.scss';

function Work() {
	return (
		<Section id="work">
			{bikes.map((bike, index) => {
				return (
					<div key={bike.name} className={`work__bike work__bike--${index + 1}`}>
						<div
							className="bike__featured-image"
							style={{
								backgroundImage: `url(${bike.images[0]})`
							}}
						>
							<img src={bike.logo} alt="logo" />
						</div>
						<Card
							icon={bike.icon}
							title={bike.name}
							description={bike.desc}
							img={bike.images[1]}
						/>
						{index === 2 && <div
							className="bike__featured-image"
							style={{
								backgroundImage: `url(${bike.images[2]})`
							}}
						></div>}
					</div>
				)
			})}
		</Section>
	)
}

export default Work;
