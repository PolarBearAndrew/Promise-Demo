//補充幾個特別的東西

let job = Promise.resolve( () => {
	return [ Promise.resolve('A'), Promise.resolve('B') ];
});

job.then( val =>
	console.log('在resolve內回傳promise物件會直接噴回promise本身,因為他已經包裝過一次了,在包裝一次就是過度包裝XD', val) );

// job.spread( ( val1, val2 ) => console.log('使用spread', val1, val2) );