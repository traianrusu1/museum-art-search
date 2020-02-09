import { useState, useEffect } from 'react';
import { useAsyncAbortable } from 'react-async-hook';
import useConstant from 'use-constant';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const searchArt = async (text, abortSignal) => {
	const result = await fetch(
		`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(text)}`,
		{
			signal: abortSignal
		}
	);

	if (result.status !== 200) {
		throw new Error('bad status = ' + result.status);
	}
	const json = await result.json();
	let detailsResult = [];

	if (json && json.objectIDs && json.objectIDs.length > 0) {
		// debugger;
		detailsResult = await Promise.all(
			json.objectIDs.slice(0, 20).map(async (id) => {
				const individualResult = await fetch(
					`https://collectionapi.metmuseum.org/public/collection/v1/objects/${encodeURIComponent(id)}`,
					{
						signal: abortSignal
					}
				);
				if (individualResult.status !== 200) {
					throw new Error('bad status = ' + individualResult.status);
				}
				return individualResult.json();
			})
		);
	}

	const didSearch = true;

	// debugger;
	return { detailsResult, didSearch };
};

const useSearchArt = () => {
	// Handle the input text state
	const [ inputText, setInputText ] = useState('');

	// Debounce the original search async function
	const debouncedSearchArt = useConstant(() => AwesomeDebouncePromise(searchArt, 400));

	const search = useAsyncAbortable(
		async (abortSignal, text) => {
			if (text.length === 0) {
				return { detailsResult: [], didSearch: false };
			} else {
				return debouncedSearchArt(text, abortSignal);
			}
		},
		// Ensure a new request is made everytime the text changes (even if it's debounced)
		[ inputText ]
	);

	// debugger;

	// Return everything needed for the hook consumer
	return {
		inputText,
		setInputText,
		search
	};
};

export default useSearchArt;
