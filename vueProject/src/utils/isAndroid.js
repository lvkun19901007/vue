/* eslint-disable */
export default function () {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  return isAndroid
}
