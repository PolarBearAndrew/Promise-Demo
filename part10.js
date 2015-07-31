import fs from 'fs';
import Promise from 'bluebird';

console.log('part 10');
console.log('================');

Promise.promisifyAll(fs);

let job = [fs.readFileAsync('A.txt'), fs.readFileAsync('A.txt')];

//用.then()的話,val會拿到一個陣列,陣列會有兩個promise物件成功地回傳值
// Promise.all(job)
// 	   .then( val => console.log('使用then承接callback', val) )
// 	   .catch( err =>  console.error('fail') );


//用spread的話會自動拆開陣列,分別塞到傳入值裡面去
Promise.all(job)
	   .spread( (val1, val2) => {
	   		console.log('使用spread承接callback')
	   		console.log('val1', val1)
	   		console.log('')
	   		console.log('val2', val2)
	   })
	   .catch( err =>  console.error('fail') );

//這個很方便XD