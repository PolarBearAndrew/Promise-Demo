import fs from 'fs';

console.log('part 2 ');
console.log('================');

//這個part2就是所謂之前會發生的狀況
//如果我需要讓他AB照順序進行, 就需要做下列操作

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
	if(err){
		console.log('讀取A.txt失敗', err)
	}else{
		console.log('Done A');

		job('B.txt', ( err, data ) => {
			if(err){
				console.log('讀取B.txt失敗', '<--他這次有乖乖在A後面');
			}else{
				console.log('Done B', '<--他這次有乖乖在A後面');
			}
		});
	}
});

//====================
//
//簡單說包很多層, callback很難寫, err又要在每一層處理一次