import fetchDetailsForAll from './fetchDetailsForAll';
import fetchIds from './fetchIds';

const searchArt = async (text, send, abortSignal) => {
	let detailsResult = [];
	// If the signal is abort then we revert back to the idle state by sending IDLE event
	// if its not abort then we change to loading state by sending SEARCH event
	abortSignal.aborted ? send('IDLE') : send('SEARCH');

	// try to do the fetch calls, and if there is an error in any of the promises send the SEARCH_FAILED event
	try {
		const result = await fetchIds(text, abortSignal, send);
		const json = await result.json();

		if (json && json.objectIDs && json.objectIDs.length > 0) {
			detailsResult = await fetchDetailsForAll(json.objectIDs.slice(0, 20), abortSignal, send);
			// if we got to this point it means the search was succesful and we have some results, so send SEARCH_SUCCESS event
			send({ type: 'SEARCH_SUCCESS', data: detailsResult });
		} else if ((json && !json.objectIDs) || json.objectIDs.length === 0) {
			// if there are no objectids then send SEARCH_NORESULTS event
			send({ type: 'SEARCH_NORESULTS', data: detailsResult });
		}
	} catch (error) {
		send('SEARCH_FAILED');
	}
	return detailsResult;
};

export default searchArt;
