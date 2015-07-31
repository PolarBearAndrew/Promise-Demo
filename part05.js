import fs from 'fs';

console.log('part 5 ');
console.log('================');

var myJob = (filename) => {
    return new Promise( (resolve, reject) => {
        return fs.readFile(filename, (err, res) => {
        	if (err) return reject(err);
            else return resolve(res);
        });
    });
}

//剛剛範例是逐步執行, 如果需要一次並排執行
//使用Promis.all()
//把所有的任務塞進陣列就對了
//其實會發現如果沒寫Pormise.all也會執行,不過有promise.all才能承接所有的callback或是err

let jobAll = [ myJob('A.txt'), myJob('A.txt'), myJob('A.txt') ];
 Promise.all(jobAll)
		.then( val =>{
			console.log('done all');
		})
		.catch( err => {
			console.log('err', err);
		});

//
//有err msg的版本
// let jobAll = [ myJob('A.txt'), myJob('A.txt'), myJob('B.txt') ];
// Promise.all(jobAll)
// 		.then( val =>{
// 			console.log('done all');
// 		})
// 		.catch( err => {
// 			console.log('err', err);
// 		});



//註1:兩份promise一起執行就有種兩個執行緒同時啟動的感覺
//
//註2:
//這邊我有跟別人詢問過一個觀念
//是否能先宣告jobAll, 然後在我整個程式的某處需要他時才使用Promise.all()呼喚他
//答案是否定的
//ES6的Pormise.all()只有承接callback和err的效果,所以沒有"主動"執行的功能
//所以其實jobAll是儲存已經完成的Promise物件,然後Promise.all()去打開這些callback而已