/**
 * Created by xingbl on 2016/8/11.
 */
module.exports = {
    PageSize:15,
    Newest:function(lid,pageIndex){
        return 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid='+lid+'&num='+this.PageSize+'&page='+pageIndex+'&encode=utf-8&_=1478745737376';   //推荐
    },
    NewIT:function(lid,pageIndex){
        return 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid='+lid+'&num='+this.PageSize+'&page='+pageIndex+'&encode=utf-8&callback=JSON_CALLBACK&_=1478744462593';     //IT
    },
    NewInternet:function(lid,pageIndex){
        return 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid='+lid+'&num='+this.PageSize+'&page='+pageIndex+'&encode=utf-8&callback=JSON_CALLBACK&_=1470880024414';    //互联网
    },
    NewMobile:function(lid,pageIndex){
       return 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid='+lid+'&num='+this.PageSize+'&page='+pageIndex+'&encode=utf-8&callback=JSON_CALLBACK&_=1478757127131'      //手机
    },
    NewDigital:function(lid,pageIndex){
       return 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid='+lid+'&num='+this.PageSize+'&page='+pageIndex+'&encode=utf-8&callback=JSON_CALLBACK&_=1478757127131'      //数码
    },
    NewExplore:function(lid,pageIndex){
       return 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid='+lid+'&num='+this.PageSize+'&page='+pageIndex+'&encode=utf-8&callback=JSON_CALLBACK&_=1478757127131'      //探索
    },
    NewComputer:function(lid,pageIndex){
       return 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid='+lid+'&num='+this.PageSize+'&page='+pageIndex+'&encode=utf-8&callback=JSON_CALLBACK&_=1478757127131'      //笔记本
    },
    NewTabletPC:function(lid,pageIndex){
       return 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid='+lid+'&num='+this.PageSize+'&page='+pageIndex+'&encode=utf-8&callback=JSON_CALLBACK&_=1478757127131'      //平板
    },
    Develop: function (pageIndex) {
        return 'http://www.51cto.com/php/get_channel_artlist.php?id=460&page='+pageIndex+'&callback=JSON_CALLBACK&_';
    }
}
