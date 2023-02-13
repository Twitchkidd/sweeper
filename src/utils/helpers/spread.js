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

// const arrayEquiv = (a1, a2) =>
// 	a1.length !== a2.length
// 		? false
// 		: a1.filter((x, i) => x !== a2[i]).length
// 		? false
// 		: true;

const arrayEquiv = (a1, a2) => {
	if (a1.length !== a2.length) return false;
	const sortA2 = a2.slice().sort();
	return a1
		.sort()
		.slice()
		.every((v, i) => v === sortA2[i]);
};

// console.log(arrayEquiv([1, 2, 3], [1, 2, 3, 4]));
// console.log(arrayEquiv([1, 2, 3], [1, 2, 4]));
// console.log(arrayEquiv([1, 2, 3], [1, 3, 2]));

const cells = [
	// * 0 1 2 3 mine on 2, clicking 0
	// * 4 5 6 7
	// * 8 9 0 1 ;)
	{
		adjacentCells: 3,
		adjacentMines: 0,
		mine: false,
	},
	{
		adjacentCells: 5,
		adjacentMines: 1,
		mine: false,
	},
	{
		adjacentCells: 5,
		adjacentMines: 0,
		mine: true,
	},
	{
		adjacentCells: 3,
		adjacentMines: 1,
		mine: false,
	},
	{
		adjacentCells: 5,
		adjacentMines: 0,
		mine: false,
	},
	{
		adjacentCells: 8,
		adjacentMines: 1,
		mine: false,
	},
	{
		adjacentCells: 8,
		adjacentMines: 1,
		mine: false,
	},
	{
		adjacentCells: 5,
		adjacentMines: 1,
		mine: false,
	},
	{
		adjacentCells: 3,
		adjacentMines: 0,
		mine: false,
	},
	{
		adjacentCells: 5,
		adjacentMines: 0,
		mine: false,
	},
	{
		adjacentCells: 5,
		adjacentMines: 0,
		mine: false,
	},
	{
		adjacentCells: 3,
		adjacentMines: 0,
		mine: false,
	},
];

const adjacencies = [
	// * 0 1 2 3 mine on 2, clicking 0
	// * 4 5 6 7
	// * 8 9 0 1 ;)
	[1, 4, 5], // 0
	[0, 2, 4, 5, 6], // 1
	[1, 3, 5, 6, 7], // 2
	[2, 6, 7], // 3
	[0, 1, 5, 8, 9], //4
	[0, 1, 2, 4, 6, 8, 9, 10], //5
	[1, 2, 3, 5, 7, 9, 10, 11], // 6
	[2, 3, 6, 10, 11], // 7
	[4, 5, 9], // 8
	[4, 5, 6, 8, 10], // 9
	[5, 6, 7, 9, 11], // 10
	[6, 7, 10], //11
];

const isBlank = id => cells[id].adjacentMines === 0;

// const getCellsToOpen = id => {
// 	// * If the cell we're opening isn't blank, it's the only cell opened
// 	if (!isBlank(id)) return id;
// 	const spread = (cur, acc = []) => {
// 		// * Grab any new cells adjacent to the current working group
// 		const newCells = cur.flatMap(id =>
// 			[...adjacencies[id]].filter(i => !acc.includes[i])
// 		);
// 		// * If none of them are blank, add all of them to the total and return it
// 		if (!newCells.filter(i => !isBlank(i))) return [...acc, ...newCells];
// 		const newNonBlanks = newCells.filter(i => cells[i].adjacentMines > 0);
// 		const newBlanks = newCells.filter(i => cells[i].adjacentMines === 0);
// 		// * Add any new non-blank cells to the total and check new blanks,
// 		// * until there are no more new blanks
// 		spread(newBlanks, [...acc, ...newNonBlanks]);
// 	};
// 	return spread([id]);
// };

// console.log(getCellsToOpen(0));
// console.log([0, 1, 4, 5, 6, 7, 8, 9, 10, 11]);
// console.log(arrayEquiv(getCellsToOpen(0), [0, 1, 4, 5, 6, 7, 8, 9, 10, 11]));

// let i = 0;

// const getCellsToOpenTest = id => {
// 	if (!isBlank(id)) return [id];
// 	const spread = (cur, acc = []) => {
// 		i++;
// 		// console.log('start', cur, acc);
// 		let newAcc = [...acc];
// 		let newCur = [];
// 		for (const cell of cur) {
// 			if (!newAcc.includes(cell)) {
// 				newAcc.push(cell);
// 			}
// 		}
// 		for (const cell of cur) {
// 			for (const adj of adjacencies[cell]) {
// 				if (!newAcc.includes(adj)) {
// 					newAcc.push(adj);
// 					if (isBlank(adj)) {
// 						newCur.push(adj);
// 					}
// 				}
// 			}
// 		}
// 		if (i > 8) return;
// 		if (newCur.length > 0) {
// 			return spread(newCur, newAcc);
// 		} else {
// 			return newAcc;
// 		}
// 	};
// 	return spread([id]);
// };

const getCellsToOpen = id => {
	if (!isBlank(id)) return [id];
	const spread = (cur, acc = []) => {
		let newAcc = [...acc];
		let newCur = [];
		for (const cell of cur) {
			if (!newAcc.includes(cell)) {
				newAcc.push(cell);
			}
		}
		for (const cell of cur) {
			for (const adj of adjacencies[cell]) {
				if (!newAcc.includes(adj)) {
					newAcc.push(adj);
					if (isBlank(adj)) {
						newCur.push(adj);
					}
				}
			}
		}
		if (newCur.length > 0) {
			return spread(newCur, newAcc);
		} else {
			return newAcc;
		}
	};
	return spread([id]);
};

// console.log(getCellsToOpen(0));
// console.log(typeof getCellsToOpen(0));
const what = getCellsToOpen(0);
console.log(what);
console.log(arrayEquiv(what, [0, 1, 4, 5, 6, 7, 8, 9, 10, 11]));
