import fs from 'fs';

console.log('part 5 ');

var myJob = (filename) => {

    return new Promise(function(resolve, reject) {
        return fs.readFile(filename, function(err, res) {
        	if (err) return reject(err);
            else return resolve(res);
        });
    });
}

//剛剛範例是逐步執行, 如果需要一次並排執行
//使用Promis.all
//把所有的job當成陣列塞進去就對了
//其實會發現如果沒寫Pormise.all也會執行,不過有promise.all才能承接所有的callback或是err

let jobAll = [ myJob('A.txt'), myJob('A.txt'), myJob('A.txt') ];
Promise.all(jobAll)
		.then( result =>{
			console.log('done all');
		})
		.catch( err => {
			console.log('err', err);
		});

//
//有err msg的版本
// let jobAll = [ myJob('A.txt'), myJob('A.txt'), myJob('B.txt') ];
// Promise.all(jobAll)
// 		.then( result =>{
// 			console.log('done all');
// 		})
// 		.catch( err => {
// 			console.log('err', err);
// 		});



//註：兩份promise一起執行就有種兩個執行緒同時啟動的感覺