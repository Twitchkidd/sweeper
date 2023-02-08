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

// const openCell = () => ({});

// const noneAreBlank = arr =>
// 	arr.map(id => adj[id].filter(i => !isBlank(i))).length === 0; // That's only if the array has one blank only lol

// const getCellsToOpen = id => {
// 	if (!isBlank(id)) return id;
// 	const spread = idArr => {
// 		if (noneAreBlank(idArr)) return [...idArr, idArr.map(id => [...adj[id]])]; // Map => Array // Not sure that's right either
// 	};
// 	return spread([id]);
// };

const cells = [
	// * adjacent cells, adjacent mines, mined
];
const adj = [
	// * arrays of indicies
];

const isBlank = id => cells[id].adjacentMines === 0;

const getCellsToOpen = id => {
	if (!isBlank(id)) return id;
	const spread = (cur, acc = []) => {
		if (cur.length === 1) {
			if (cur.map(id => adj[id].filter(i => !isBlank(i))).length === 0) {
				return [id, ...adj[id]];
			}
		}
	};
	return spread([id]);
};
