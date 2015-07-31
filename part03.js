import fs from 'fs';

console.log('part 3 ');
console.log('================');

//所以我們要用promise ~!!
//首先要把func包裝成promise物件
//當啷~! 包裝方式就是直接將操作和成功分別使用兩個callback包裝的意思, resolve是成功, reject是失敗
//**不過實際上沒有這麼麻煩, 只有自己撰寫自己的功能時才需要這樣包裝

let job = (filename, enc) => {
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, enc, (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
}


//包裝完怎麼用呢?
//像這樣-->
//job('A.txt').then( callback ).catch( callback )

//範例(沒err發生)
job('A.txt')
	//其實就是把callback改寫成一個.then而已
	//讓callback不會一層又一層的包起來
	.then( val => {
		console.log('A Done');

		//return 一個promise物件
		//就可以繼續用.then()承接這個任務的callback
		return job('A.txt');
	})
	.then( val => {
		console.log('A2 Done');
	})
	//我認為這邊是promise最大的價值了
	//寫一個catch 就可以承接之前每一層if(err)要去檢查的錯誤
	//所以在很多連續操作時,只需要一個catch就可以解決所有err
	.catch( err => {
		console.log('err', err);
	});



//有err就會掉進.catch()
//在排版的時候,就是要很假掰的把所有.then點點排在同一線,這樣才好看
job('A.txt').then( val => {
				console.log('A Done');
				return job('B.txt');
			})
			.then( val => {
				console.log('B Done');
			})
			.catch( err => {
				console.log('err', '<-- B沒有完成會被.catch()到這邊來');
			});
