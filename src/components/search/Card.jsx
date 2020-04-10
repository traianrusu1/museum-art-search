import React, { useState } from 'react';
import DetailModal from './DetailModal';
import './Card.css';

const Card = ({ artPiece }) => {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = (e) => {
		e.target.tagName !== 'A' && setShow(true);
	};

	return (
		<>
			<div className="card h-100" onClick={handleShow}>
				<div>
					<img className="card-img-top card-img" src={artPiece.primaryImageSmall} alt="Card image cap" />
				</div>
				<div className="card-body">
					<h5 className="card-title">{artPiece.title}</h5>
					<p className="card-text">{artPiece.department}</p>
					<a href={artPiece.objectURL} target="_blank" className="btn btn-primary">
						View On Site
					</a>
				</div>
			</div>
			<DetailModal artPiece={artPiece} show={show} handleClose={handleClose} />
		</>
	);
};

export default Card;
