import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './DetailModal.css';

const DetailModal = ({ artPiece, show, handleClose }) => {
	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{artPiece.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="mx-3">
					<img className="img-fluid" src={artPiece.primaryImage} alt={artPiece.title} />
					<div className="d-flex flex-column mt-3">
						{artPiece.culture && (
							<div className="mb-3">
								<div className="label">Culture:</div> <div className="value">{artPiece.culture}</div>
							</div>
						)}
						{artPiece.period && (
							<div className="mb-3">
								<div className="label">Period:</div> <div className="value">{artPiece.period}</div>
							</div>
						)}
						{artPiece.objectDate && (
							<div className="mb-3">
								<div className="label">Date:</div> <div className="value">{artPiece.objectDate}</div>
							</div>
						)}
						{artPiece.medium && (
							<div className="mb-3">
								<div className="label">Medium:</div> <div className="value">{artPiece.medium}</div>
							</div>
						)}
						{artPiece.dimensions && (
							<div className="mb-3">
								<div className="label">Dimensions:</div>{' '}
								<div className="value">{artPiece.dimensions}</div>
							</div>
						)}
						{artPiece.region && (
							<div className="mb-3">
								<div className="label">Region:</div> <div className="value">{artPiece.region}</div>
							</div>
						)}
						{artPiece.classification && (
							<div className="mb-3">
								<div className="label">Classification:</div>{' '}
								<div className="value">{artPiece.classification}</div>
							</div>
						)}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-primary" onClick={handleClose}>
						Close
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default DetailModal;
