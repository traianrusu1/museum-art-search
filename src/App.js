import React from 'react';

import Layout from './components/layout/Layout';
import SearchForm from './components/search/SearchForm';
import ArtList from './components/search/ArtList';
import useSearchArt from './hooks/useSearchArt';

function App() {
	const { inputText, setInputText, search } = useSearchArt();

	const checkSearchStatus = () => {
		// check for the different states of searching to decide what to show in the UI
		if (search.loading) {
			// if it's loading show a spinner
			return (
				<div>
					<div className="spinner-border mt-3" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			);
		} else if (search.error) {
			// if it's an error, show the error
			return <div>Error: {search.error.message}</div>;
		} else if (
			search.result &&
			search.result.detailsResult &&
			search.result.detailsResult.length === 0 &&
			search.result.didSearch
		) {
			// if a search has been done and there are no results show a message saying no results found
			return <div>Your search for "{inputText}" didn't return any results. Please try again.</div>;
		} else if (search.result && search.result.detailsResult && search.result.detailsResult.length) {
			// if there are results show the list of results
			return (
				<div>
					<ArtList results={search.result.detailsResult} />
				</div>
			);
		}
	};

	return (
		<Layout>
			<section className="container">
				<SearchForm inputText={inputText} setInputText={setInputText} />
			</section>
			<section className="container">
				<div className="d-flex justify-content-center pt-3">{checkSearchStatus()}</div>
			</section>
		</Layout>
	);
}

export default App;
