import request from '@/utils/request'

/**
 * 登录
 * @param {} params phoneNum password
 */
export function loginIn (params) {
  return request({
    url: '/user/login',
    method: 'post',
    params
  })
}
