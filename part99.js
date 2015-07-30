
console.log('part 99 ');


import fs from 'fs';
import Promise from 'bluebird';

//bluebird會把整個fs拿去做promise的包裝
Promise.promisifyAll(fs);


//把原先fs.readFile的操作 加上Async就完成囉

let job = [fs.readFileAsync('A.txt'), fs.readFileAsync('A.txt')];

// Promise.all(job)
// 	   .then( val => console.log('使用then承接callback', val) ) //用then的話,發會拿到一個陣列,陣列會有兩個promise成功地回傳值
// 	   .catch( err =>  console.error('fail') );


Promise.all(job)
	   .spread( (val1, val2) => {
	   		console.log('使用spread承接callback')
	   		console.log('val1', val1)
	   		console.log('----------')
	   		console.log('val2', val2)
	   }) //用spread的話會自動拆開陣列,分別塞到傳入值裡面去
	   .catch( err =>  console.error('fail') );


//這個很方便XD