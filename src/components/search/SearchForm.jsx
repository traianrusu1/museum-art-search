import React from 'react';

const SearchForm = ({ inputText, setInputText }) => {
	return (
		<div>
			<form className="mt-3">
				<div className="form-group">
					<label htmlFor="search-art-text-input"> Search Art </label>
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
