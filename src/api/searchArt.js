import fetchDetailsForAll from './fetchDetailsForAll';
import fetchIds from './fetchIds';

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

export default searchArt;
