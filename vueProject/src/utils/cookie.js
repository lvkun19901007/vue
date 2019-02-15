export function addCookie (key, value, date) { // 01 判断是否需要设置过期时间
  if (arguments.length === 2) {
    document.cookie = key + '=' + value
  } else if (arguments.length === 3) { // 02 设置过期时间
    var dateM = new Date()
    dateM.setDate(dateM.getDate() + date)
    var res = key + '=' + value + ';' + 'expires=' + dateM
    document.cookie = res
  }
}

export function getCookie (key) { // 01 先对获取的字符串进行切割，获取得到数组
  var arrM = document.cookie.split(';') // 02 遍历数组
  for (var i = 0, len = arrM.length; i < len; i++) { // 03 对数组中取出来的每个元素再进行切割
    var arrT = arrM[i].split('=')
    var res = arrT[0].replace(/^\s+|\s+$/g, '')
    if (res === key) {
      return arrT[1]
    }
  }
}

export function removeCookie (key) { // 重新设置某个cookie的过期时间
  addCookie(key, '', -1)
}
