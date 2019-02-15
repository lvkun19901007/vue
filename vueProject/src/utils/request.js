/**
 * 创建axios实例
 */
import axios from 'axios'
// import {Toast} from 'vant'
// import path from './path'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 15000
})

// 添加request请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  console.log(error) // for debug
  return Promise.reject(error)
})

// response响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('err' + error)// for debug
    // Toast(error.message)
    return Promise.reject(error)
  }
)

export default service
