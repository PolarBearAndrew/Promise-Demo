import fs from 'fs';

console.log('part 1 ');
console.log('================');

// promise 主要用來解決 javascript 兩個問題：
// 1. callback太多層
// 2. 同時多層的callback每次都要檢查err, err回傳也相當麻煩
//以下是一般包裝一個func的方式
//(還沒有使用callback)

let job = ( filename, callback) => {

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