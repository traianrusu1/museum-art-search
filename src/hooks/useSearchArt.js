import { useState, useEffect } from 'react';
import { useAsyncAbortable } from 'react-async-hook';
import useConstant from 'use-constant';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const fetchIds = async (text, abortSignal) => {
	const result = await fetch(
		`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(text)}`,
		{
			signal: abortSignal
		}
	);
	if (result.status !== 200) {
		throw new Error('bad status = ' + result.status);
	}
	return result;
};

const fetchDetailsForAll = async (ids, abortSignal) => {
	return await Promise.all(
		ids.map(async (id) => {
			const individualResult = await fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/objects/${encodeURIComponent(id)}`,
				{
					signal: abortSignal
				}
			);
			if (individualResult.status !== 200) {
				throw new Error('bad status = ' + individualResult.status);
			}

			return await individualResult.json();
		})
	);
};

const searchArt = async (text, send, abortSignal) => {
	let detailsResult = [];
	abortSignal.aborted ? send('IDLE') : send('SEARCH');

	try {
		const result = await fetchIds(text, abortSignal, send);
		const json = await result.json();

		if (json && json.objectIDs && json.objectIDs.length > 0) {
			detailsResult = await fetchDetailsForAll(json.objectIDs.slice(0, 20), abortSignal, send);
			send({ type: 'SEARCH_SUCCESS', data: detailsResult });
		} else if ((json && !json.objectIDs) || json.objectIDs.length === 0) {
			send({ type: 'SEARCH_NORESULTS', data: detailsResult });
		}
	} catch (error) {
		send('SEARCH_FAILED');
	}
	return detailsResult;
};

const useSearchArt = (send) => {
	// Handle the input text state
	const [ inputText, setInputText ] = useState('');

	// Debounce the original search async function
	const debouncedSearchArt = useConstant(() => AwesomeDebouncePromise(searchArt, 400));

	const search = useAsyncAbortable(
		async (abortSignal, text) => {
			send('IDLE');
			if (text.length === 0) {
				return [];
			} else {
				return debouncedSearchArt(text, send, abortSignal);
			}
		},
		// Ensure a new request is made everytime the text changes (even if it's debounced)
		[ inputText ]
	);

	// Return everything needed for the hook consumer
	return {
		inputText,
		setInputText,
		search
	};
};

export default useSearchArt;
