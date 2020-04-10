import React from 'react';
import { useMachine } from '@xstate/react';

import Layout from './components/layout/Layout';
import SearchForm from './components/search/SearchForm';
import ArtList from './components/search/ArtList';
import useSearchArt from './hooks/useSearchArt';
import searchStateMachine from './state/searchStateMachine';

function App() {
	const [ machine, send ] = useMachine(searchStateMachine);
	const { inputText, setInputText, search } = useSearchArt(send);

	console.log(machine);

	return (
		<Layout>
			<section className="container formContainer">
				<SearchForm inputText={inputText} setInputText={setInputText} />
			</section>
			<section className="container">
				<div className="d-flex justify-content-center pt-3">
					{machine.matches('loading') && (
						<div className="spinner-border mt-3" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					)}
					{machine.matches('error') && (
						<div className="alert alert-danger" role="alert">
							Sorry, an error occurred, please try again.
						</div>
					)}
					{machine.matches('noresults') && (
						<div className="alert alert-secondary" role="alert">
							Your search for "{inputText}" didn't return any results. Please try again.
						</div>
					)}
					{machine.matches('success') && <ArtList results={machine.context.results} />}
				</div>
			</section>
		</Layout>
	);
}

export default App;
