import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ inputText, setInputText }) => {
	return (
		<div>
			<form className="mt-4 row justify-content-center">
				<div className="form-group col-lg-6">
					<div className="d-flex justify-content-center">
						<h1 htmlFor="search-art-text-input" className={styles.searchHeading}> Search Art </h1>
					</div>
					<input
						className="form-control"
						type="text"
						id="search-art-text-input"
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
