import fs from 'fs';

console.log('part 6 ');
console.log('================');

//這邊要講兩個莫名其妙的東西,很簡單,可是我還是不知道他要幹麻...

//resolve 會直接產生一個成功的promise物件
//reject 則相反, 產生一個師的pormise物件
//
//我還沒想通這兩個東西做什麼用的
//reject 似乎有種 break 的味道
//resolve 也是有種continue的感覺
//應該是用來控制整個流程接下來的走向
//不過運用這兩個操作,可自在.then()之間繼續傳遞參數
//應該適用於控制整個流程

let promiseObj = Promise.resolve('success'); //回傳正確
// let promiseObj = Promise.reject('fail'); //回傳錯誤

promiseObj.then( result => console.log(result) )
		  .catch( err => console.log(err) );

//resolve和reject都只能丟值,不能丟還沒有完成的pormise物件