import { useState, useEffect } from 'react';
import { useAsyncAbortable } from 'react-async-hook';
import useConstant from 'use-constant';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import searchArt from '../api/searchArt';

const useSearchArt = (send) => {
	// Handle the input text state
	const [ inputText, setInputText ] = useState('');

	// Debounce the original search async function
	const debouncedSearchArt = useConstant(() => AwesomeDebouncePromise(searchArt, 400));

	const search = useAsyncAbortable(
		async (abortSignal, text) => {
			// because this function runs on every input change, but not every input change fires a request
			// we reset it to idle here and then when the request is actually launched it updates the state
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
