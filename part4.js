import fs from 'fs';

console.log('part 3 ');

let job = (filename, enc) => {
    return new Promise(function(fulfill, reject) {
        fs.readFile(filename, enc, function(err, res) {
            if (err) reject(err);
            else fulfill(res);
        });
    });
}

//catch是個承接錯誤的中斷點
//我們改變一下順序, 先做會錯誤的B, B一錯, 就會盡到catch裡面

job('B.txt')
	//其實就是把callback改寫成一個.then而已
	.then( (result) => {
		console.log('B Done');
		return job('A.txt');
	})
	.then( (result) => {
		console.log('A Done'); //這行是不會發生的,因為A就錯了,他會忽略這個,跳到catch
	})
	.catch( (err)=> {
		console.log('err', '<-- B沒有完成會被catch err到這邊來, 會跳過發生錯誤的地方和catch之間的錯誤');

	})
	//catch可以不只有一個,所以直接解開28行的註解和31行之後的註解,可以再承接B的錯誤之後,繼續做事情
	.then( (result) => {
		console.log('A Done <--第一個catch之後的事情');
	})
	.catch( (err)=> {
		console.log('如果又錯了,會被catch到這邊來');
	})

//所以這樣就可以設計一整套有順序的操作流程