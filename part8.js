
//這是我實際上在專題裡面用的狀況, 當api很多層的時候就相當方便
//mongoose的操作一樣補上Async就可以用pormise的方式運行了

//這個只是炫耀用的而已,無法在這邊執行

//db operation
User.find({})
    .execAsync()
    .then( (result) => {

        //操作..
        // let list = [];

        // result.forEach( (value) => {
        //     if( value.follow.indexOf(req.query.uid) !== -1){
        //         list = list.concat(value.like);
        //     }
        // });

        // debug('[GET] 查詢追蹤者的喜愛文章-取得追蹤名單 success(1) ->', list);

        // list = list.map( (value) => {
        //     return value.aid;
        // });

        return Article.find()
                      .where('_id').in(list)
                      .sort({ time: -1 })
                      .execAsync();
    })
    .then( (result) => {
        debug('[GET] 查詢追蹤者的喜愛文章-取得文章 success(2) ->', result);
        res.json(result);
    })
    .catch( (err) =>{
        debug('[GET] 查詢追蹤者的喜愛文章 fail ->', err);
        return next(err);
    });