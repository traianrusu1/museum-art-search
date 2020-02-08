import React from 'react';

const SearchForm = () => {
	return (
		<form className="mt-3">
			<div className="form-group">
				<label htmlFor="search-art-text-input"> Search Art </label>
				<input className="form-control" type="text" id="search-art-text-input" />
			</div>
		</form>
	);
};

export default SearchForm;
