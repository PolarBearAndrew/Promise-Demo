console.log('part 9 ');
console.log('================');

//補充幾個需要注意的小錯誤
//在resolve內回傳promise物件會直接噴回promise本身
//因為他已經包裝過一次了,在包裝一次就是過度包裝XD
//所以要塞在resolve內的東西,需要有直接回傳得值才行

let job = Promise.resolve( () => {
	return [ Promise.resolve('A'), Promise.resolve('B') ];
});

job.then( val => console.log('', val) );