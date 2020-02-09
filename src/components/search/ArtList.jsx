import React from 'react';
import Card from './Card';

const ArtList = ({ results }) => {
	return (
		<div className="row">
			{results.map((result) => (
				<div key={result.objectID} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
					<Card artPiece={result} />
				</div>
			))}
		</div>
	);
};

export default ArtList;
