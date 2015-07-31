//這邊舉一個容易犯錯的例子
//
//可能有一系列的操作長這個樣子
//以前在node.js時,如果發生錯誤,直接寫return next(err); 就可以了
//用return中斷整個func
//可是在promise的操作裡面,return會被下一個.then()承接,然後他會繼續做下去(或是發生更奇怪的錯誤)


job().then( val => {

		if(val.length === 0 ){
			return next(new Error('回傳值為0')); //next通常是接到錯誤頁面
		}

	 })
	 .then( val => {

	 	//但其實因為多加了return 他最終會跑到這個.then()裡面

	 })
	 .then( val => {
	 	//因此這個reject的操作就正確多了,把自定義的err丟給catch處理
	 	//疑?
	 	//我好像解答我自己前面的疑問了!!?
	 	if(val.length === 0 ){
			return Promise.reject(new Error('回傳值為0'));
		}

	 })
	 .then( val => {
	 	// ...
	 })
	 .then( val => {
	 	// ...
	 })
	 .catch( err => {
	 	next(err);
	 })