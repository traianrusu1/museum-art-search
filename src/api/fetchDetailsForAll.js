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

export default fetchDetailsForAll;
