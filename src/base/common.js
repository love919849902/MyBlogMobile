var common = {
  readableDate: function (time) {
    var oDate = new Date(time), cDate = new Date(), interval = cDate - oDate, hour, minute, hourStr, minuteStr, result;
    //一小时内
    if (interval < 3600000) {
      result = (Math.ceil(interval / 60000)).toString() + '分钟前';
    }
    //今年之内
    else {
      hour = oDate.getHours();
      minute = oDate.getMinutes();
      hourStr = hour < 10 ? '0' + hour.toString() : hour.toString();
      minuteStr = minute < 10 ? '0' + minute.toString() : minute.toString();
      if (cDate.getFullYear() === oDate.getFullYear()) {
        //今日之内
        if (cDate.getDate() === oDate.getDate()) {
          result = '今天' + hourStr + ':' + minuteStr;
        }
        //今日以前
        else result = (oDate.getMonth() + 1).toString() + '月' + oDate.getDate().toString() + '日 ' + hourStr + ':' + minuteStr;
      }
      //今年以前
      else result = oDate.getFullYear().toString() + '年 ' + (oDate.getMonth() + 1).toString() + '月' + oDate.getDate().toString() + '日 ' + hourStr + ':' + minuteStr;
    }
    return result;
  },
  readableTimestamp: function (time) {   //时间戳
    var oDate = new Date(parseInt(time) * 1000), cDate = new Date(), interval = cDate - oDate,
      hour, minute, hourStr, minuteStr, result;
    //一小时内
    if (interval < 3600000) {
      result = (Math.ceil(interval / 60000)).toString() + '分钟前';
    }
    //今年之内
    else {
      hour = oDate.getHours();
      minute = oDate.getMinutes();
      hourStr = hour < 10 ? '0' + hour.toString() : hour.toString();
      minuteStr = minute < 10 ? '0' + minute.toString() : minute.toString();
      if (cDate.getFullYear() === oDate.getFullYear()) {
        //今日之内
        if (cDate.getDate() === oDate.getDate()) {
          result = '今天' + hourStr + ':' + minuteStr;
        }
        //今日以前
        else result = (oDate.getMonth() + 1).toString() + '月' + oDate.getDate().toString() + '日 ' + hourStr + ':' + minuteStr;
      }
      //今年以前
      else result = oDate.getFullYear().toString() + '年 ' + (oDate.getMonth() + 1).toString() + '月' + oDate.getDate().toString() + '日 ' + hourStr + ':' + minuteStr;
    }
    return result;
  },
  columnInfos: {
    351: {
      name: '互联网',
      columnid: 0
    },
    349: {
      name: 'IT',
      columnid: 0
    },
    350: {
      name: '电信',
      columnid: 0
    },
    353: {
      name: '手机',
      columnid: 0
    },
    362: {
      name: '相机',
      columnid: 0
    },
    354: {
      name: '家电',
      columnid: 0
    },
    355: {
      name: '笔记本',
      columnid: 0
    },
    352: {
      name: '探索',
      columnid: 0
    }
  },
}
module.exports = common;
