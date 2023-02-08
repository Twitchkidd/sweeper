// const getCellsToOpen = initial => {

//   let toOpen = [initial];

//   const spread = index => {
//     if (adj[index] no more blanks) { push to open and return to open}

//   }

// }

// const spread = idArr => idArr.reduce((acc, cur) => {
//   if (non of cur's adjacents are blank) { return acc and cur }
//   otherwise
//   ... oh no
// }, [])

// const getCellsToOpen = initialId => {
// 	const toOpen = [initialId];
// 	const spread = idArr => {
// 		const workingGroup = idArr
// 			.map(id => [...adj[id]])
// 			.filter(id => isBlank(id));
// 		if (workingGroup.length === 0) {
// 			return idArr;
// 		}
// 		// Mmmmmm, I don't think that is the start that does what you want it to, friend
// 	};
// 	return spread(toOpen);
// };

const cells = [
	// * adjacent cells, adjacent mines, mined
];
const adj = [
	// * arrays of indicies
];

const isBlank = id => cells[id].adjacentMines === 0;

const openCell = () => ({});

const getCellsToOpen = id => {
	if (!isBlank(id)) return id;
	const spread = () => ({});
	return spread(id);
};
