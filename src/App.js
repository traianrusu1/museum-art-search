import React from 'react';

import Layout from './components/layout/Layout';
import SearchForm from './components/search/SearchForm';
import ArtList from './components/search/ArtList';

function App() {
	return (
		<Layout>
			<section className="container">
				<SearchForm />
				<ArtList />
			</section>
		</Layout>
	);
}

export default App;
