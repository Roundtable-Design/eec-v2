export const filterByDate = (episodes, { min, max }) =>
	episodes.filter(({ pubDate }) => {
		const pubYear = new Date(pubDate).getFullYear();

		return min <= pubYear && max >= pubYear;
	});

function arrayContainsArray(superset, subset) {
	if (0 === subset.length) {
		return false;
	}
	return subset.every(function (value) {
		return superset.indexOf(value) >= 0;
	});
}

export const filterByText = (episodes, text) =>
	episodes.filter(({ title, description = "", author }) => {
		const combinedProps = [title, description, author]
			.join(" ")
			.toLowerCase();

		console.log({ combinedProps });

		return combinedProps.indexOf(text.toLowerCase()) !== -1;
	});
