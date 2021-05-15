/**
 * 防抖函数 , 防抖函数只执行一次，后面执行的都是其返回的函数
 */
 export function deBounce(func, delay) {
  let timer = null;                          //该timer只会执行一次

  return function(...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      //console.log("执行一次");
      func.apply(this, args);
    }, delay);
  };
}

/**
 * 格式化函数 ， 给日期格式化
 */
export function formatDate(date, fmt) {

  //判断格式fmt中是否有y,即判断是否需要获取年份, y+匹配一个或多个y
  if (/(y+)/.test(fmt)) {
    let dateY = date.getFullYear() + "";    //加字符串是为了将Number型年份转为String型
    fmt = fmt.replace(RegExp.$1, dateY.substr(4 - RegExp.$1.length));  
    //RegExp.$1就是fmt中的"yyyy", substr()将获取到的年份字符串根据传进来几个y进行截取，replace()方法将fmt中的yyyy替换为截取后的字符串
  }


  //获取其他，因为y最多有4个，而其它最多有2个，所以分开写
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
function padLeftZero(str) {
  return ("00" + str).substr(str.length);    //长度不为1的情况下可能为0或2，通过截取方法如果是0位则返回00，如果是2位返回这两位
}