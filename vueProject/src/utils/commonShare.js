// 微信全局分享文件，在router中afterEach守卫中调用，注意点，afterEach中location.href取到的是from里的，所以需要处理成to页面的url
// import Vue from 'vue'
import { getWxConfig, wechatShare } from '@/utils/api'
import store from '../store'
import wx from 'weixin-js-sdk'
import isAndroid from '@/utils/isAndroid'
export default function commonShare (info) {
  if (isAndroid()) {
    getWxConfig({
      url: info.pageUrl,
      access_token: store.state.token || ''
    }).then((res) => {
      if (res.message === 'SUCCESS') {
        let data = res.data
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.noncestr, // 必填，生成签名的随机串
          signature: data.signature, // 必填，签名，见附录1
          jsApiList: ['chooseWXPay', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        wxReady(info)
      }
    })
  } else {
    wxReady(info)
  }
}
function wxReady (info) {
  wx.ready(function () { // 通过ready接口处理成功验证
    let config = {
      title: info.title,
      desc: info.desc,
      link: info.link,
      imgUrl: info.imgUrl,
      success: function () {
        console.log('分享成功')
      }
    }
    let config1 = { // 分享到朋友圈配置项
      title: info.title,
      link: info.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: info.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        console.log('分享成功')
        wechatShare({
          test: 'path',
          access_token: store.state.token
        }).then(() => {})
      }
    }
    // wx.updateAppMessageShareData(config) // 分享给朋友
    // wx.updateTimelineShareData(config1) // 分享到朋友圈

    wx.onMenuShareAppMessage(config) // 分享给朋友
    wx.onMenuShareTimeline(config1) // 分享到朋友圈
  })
}
// Vue.prototype.$commonShare = commonShare
