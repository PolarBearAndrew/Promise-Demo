import fs from 'fs';

console.log('part 6 ');

//這邊要講兩個莫名其妙的東西,很簡單,可是我還是不知道他要幹麻

//resolve 會直接產生一個成功的promise物件
//reject則相反
//
//我還沒想通這兩個東西做什麼用的
//reject似乎有種 break 的味道
//resolve 也是有種continue的感覺
//應該是用來控制整個流程接下來的走向

let promiseObj = Promise.resolve('success'); //回傳正確
// let promiseObj = Promise.reject('fail'); //回傳錯誤

promiseObj.then( result => console.log(result) )
		  .catch( err => console.log(err) );