import fs from 'fs';

console.log('part 4 ');
console.log('================');

let job = (filename, enc) => {
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, enc, (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
}

//catch是個承接錯誤的中斷點
//我們改變一下順序, 先做會錯誤的B,
//一旦B發生err, 就會到.catch()裡面, 原先期望的A工作就會被忽略

job('B.txt')
	.then( val => {
		console.log('B Done');
		return job('A.txt'); //期待的A工作
	})
	.then( val => {
		console.log('A1 Done'); //這是不會發生的,因為B就錯了,他會忽略這個,跳到catch
	})
	.catch( err => {
		console.log('err <-- B沒有完成會被catch err到這邊來, 會跳過發生錯誤的地方和catch之間的錯誤');
		return job('A.txt'); //就算發生錯誤,我仍然可以執行其他任務
	})
	//catch可以不只有一個,所以28行之後串接的程式碼,可以讓前面承接B的錯誤的catch之後繼續做事情
	.then( val => {
		console.log('A2 Done <--第一個catch告訴他如果錯誤的繼續做的工作');
	})
	.catch( err => {
		console.log('如果又錯了,會被catch到這邊來');
	})

//所以這樣就可以設計一整套有順序的操作流程