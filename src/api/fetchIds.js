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

export default fetchIds;
