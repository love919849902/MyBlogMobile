var ajax = {
  POSTMethod: function (url, jsonData, func, error) {
    var options = {
      type: "post",
      url: url,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: jsonData,
      success: func,
      error: error ? null : error,
    };
    return $.ajax(options);
  },
  GETMethod: function (url, isSync, dataType) { //向服务器发送Get类型的请求
    var options = {
      type: 'GET',
      cache: false,
      dataType: dataType == undefined ? "json" : dataType,
      async: (isSync == undefined ? true : isSync),
      contentType: 'application/json;charset=utf-8',
      beforeSend: function (request) {
        if ($.cookie == undefined) {
          return;
        }
        ;
        if ($.cookie('token_key')) {
          request.setHeader("token-key", $.cookie('token_key'));
        }
        request.setHeader("accept", "application/json;odata=verbose");
        request.setHeader("Access-Control-Allow-Origin", "*");
        request.setHeader("content-type", "application/json; charset=utf-8");
      }
    };
    $.extend(options, {
      url: url
    });
    return $.ajax(options);
  },
  GETSINAMethod: function (url) { //向服务器发送Get类型的请求
    var options = {
      type : "get",
      async:false,
      url : url,
      dataType : "jsonp",
      jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
      jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
    };
    $.extend(options, {
      url: url
    });
    return $.ajax(options);
  }
}
module.exports = ajax;
