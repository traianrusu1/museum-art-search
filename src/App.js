import React from 'react';

import Layout from './components/layout/Layout';
import SearchForm from './components/search/SearchForm';
import ArtList from './components/search/ArtList';
import useSearchArt from './hooks/useSearchArt';

function App() {
	const { inputText, setInputText, search } = useSearchArt();

	return (
		<Layout>
			<section className="container">
				<SearchForm inputText={inputText} setInputText={setInputText} />
				{/* <ArtList /> */}
			</section>
			<div className="container mx-auto">
				{search.loading && (
					<div>
						<div class="spinner-border" role="status">
							<span class="sr-only">Loading...</span>
						</div>
					</div>
				)}
				{search.error && <div>Error: {search.error.message}</div>}
				{search.result && (
					<div>
						<div>Results: {search.result.length}</div>
						<ul>{search.result.map((hero) => <li key={hero.title}>{hero.title}</li>)}</ul>
					</div>
				)}
			</div>
		</Layout>
	);
}

export default App;
