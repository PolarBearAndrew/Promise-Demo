import fs from 'fs';
import Promise from 'bluebird';

console.log('part 7 ');
console.log('================');

//這邊要講個好棒棒的東西
//這邊要講個好棒棒的東西
//這邊要講個好棒棒的東西
//剛剛把fs包起來太複雜了
//如果有個模組,有很多操作要處理,怎麼辦呢?
//
//這東西叫做bluebird!!
//
//https://github.com/petkaantonov/bluebird
//
//裡面有很多很清楚的文件可以查(第一次看到有人寫這麼清楚)

Promise.promisifyAll(fs);//bluebird會把整個fs拿去做promise的包裝

//把原先fs.readFile的操作 加上Async就是bluebird幫我們產生的pormise物件了

fs.readFileAsync('A.txt') //<--就是這行,原先的readFile變成readFileAsync
  .then( val => console.log('success') )
  .catch( err =>  console.error('fail') );



