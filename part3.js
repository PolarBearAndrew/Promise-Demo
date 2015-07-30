import fs from 'fs';

console.log('part 3 ');
console.log('================');

//所以我們要用promise ~!!
//
//首先要把func包裝成promise物件
//
//當啷~! 其實ㄕ官方網站這樣寫的...
//
//不過實際上沒有這麼麻煩, 只有自己撰寫自己的功能時才需要這樣包裝

let job = (filename, enc) => {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, enc, function(err, res) {
            if (err) reject(err);
            else resolve(res);
        });
    });
}


//包裝完怎麼用呢?
//像這樣:
// job('A.txt')
// 	.then()
// 	.catch()

//沒錯誤發生的範例
job('A.txt')
	//其實就是把callback改寫成一個.then而已
	.then( result => {
		console.log('A Done');
		return job('A.txt'); //直接retur一個promise物件,可以繼續用then承接下一個call back
	})
	.then( result => {
		console.log('A2 Done');
	})
	//寫一個catch 就可以承接之前每一層if(err)要去檢查的錯誤
	.catch( err => {
		console.log('err', err);
	})



//有err發生的範例
/*
job('A.txt')
	//其實就是把callback改寫成一個.then而已
	.then( result => {
		console.log('A Done');
		return job('B.txt'); //直接retur一個promise物件,可以繼續用then承接下一個call back
	})
	.then( result => {
		console.log('B Done');
	})
	//寫一個catch 就可以承接之前每一層if(err)要去檢查的錯誤
	.catch( err => {
		console.log('err', '<-- B沒有完成會被catch err到這邊來');
	})
*/
