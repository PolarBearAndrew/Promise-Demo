import fs from 'fs';

console.log('part 1 ');

// promise 主要用來解決 javascript 兩個問題：
// 1. callback hell
// 2. 同時多層的callback會衍生出 超多層的 if(err) 這個問題 err回傳也相當麻煩
// 下面是這兩個問題的範例

let job = ( filename, callback) => {

	console.log('Job start', filename);

	//寫這一坨很醜
	fs.readFile(filename, 'utf8', function (err, res){
	    if (err) return callback(err);
	    try {
	      res = res.toString();
	    } catch (err) {
	      return callback(err);
	    }
	    callback(null, res);
	 });
}

//讀取A.txt, 裡面是一堆資料, 讀許需要相對多的時間
job('A.txt', ( err, data ) => {
	console.log('Done A');
});

//沒有B.txt, 所以fail的很快
job('B.txt', ( err, data ) => {
	console.log('Done B', '<--他卻先做完');
});


//====================