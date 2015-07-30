//剛剛把fs包起來太複雜了,如果有個模組,有很多操作要處理,怎麼辦呢
//這邊要講個好棒棒的東西
//這東西叫做bluebird
//https://github.com/petkaantonov/bluebird
//裡面有很多很清楚的文件可以查(第一次看到有人寫這麼清楚)

console.log('part 7 ');


import fs from 'fs';
import Promise from 'bluebird';

//bluebird會把整個fs拿去做promise的包裝
Promise.promisifyAll(fs);


//把原先fs.readFile的操作 加上Async就完成囉

fs.readFileAsync('A.txt')
  .then( val => console.log('success') )
  .catch( err =>  console.error('fail') );



