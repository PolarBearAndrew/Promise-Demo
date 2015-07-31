//mongoose的操作一樣補上Async就可以用pormise的方式運行了
//這是我實際上在專題裡面用的狀況, 當api很多層的時候就相當方便

//這個只是炫耀用的而已XD,無法在這邊執行

//db operation
User.find({})
    .execAsync()
    .then( val => {

        //操作..
        //做一些資料處理

        //接續的下一個db操作
        return Article.find()
                      .where('_id').in(list)
                      .sort({ time: -1 })
                      .execAsync();
    })
    .then( val => {
        debug('[GET] 查詢追蹤者的喜愛文章-取得文章 success ->', result);
        res.json(result);
    })
    .catch( err =>{
        debug('[GET] 查詢追蹤者的喜愛文章 fail ->', err);
        return next(err);
    });