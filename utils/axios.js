import axios from '@nuxtjs/axios'
import service from '../api/index'
import {
  getAccessToken,
  removeAccessToken,
} from '../api/cache'

// 引入element-ui组件
import { Message } from 'element-ui'

axios.defaults.headers.Accept = 'application/json'

// service 循环遍历输出不同的请求方法
let instance = axios.create({
  baseURL: '',
  timeout: 1000
})
// 包裹请求方法的容器
const Http = {};
for(let key in service){
  // url method
  let api = service[key];
  // async 避免进入回调地狱
  Http[key] = async function(
    params, //请求参数
    isFormData=false, //标志是否是form-data请求
    config={} //配置参数
  ){
    let newParams = {}
    // content-type是否是form-data的判断
    if(params && isFormData){
      newParams = new FormData()
      for(let i in parmas){
        newParams.append(i, params[i])
      }
    }else{
      newParams = params
    }
    // 不同请求的判断
    let response = {}; //请求的返回值
    if(api.method === 'put' || api.method === 'post' ||api.method === 'patch'){
      try{
        response = await instance[api.method](api.url,
          newParams, config)
      }catch(err){
        response = err
      }
    }else if(api.method === 'get' || api.method === 'delete'){
      config.params = newParams
      try{
        response = await instance[api.method](api.url,config)
      }catch(err){
        response = err
      }
    }
    return response; //返回响应值
  }
}

// 拦截器的添加
instance.interceptor.request.use(config=>{
  // 请求前
  Message({
    mask:false,
    duration:0, //一直存在
    forbidClick:true, // 禁止点击
    message:'加载中...'
  })
  return config
},err=>{
  // 请求错误
  Message.warning('请求错误,请求稍后重试')
})

// 响应拦截器
instance.interceptor.response.use(res=>{
  // 响应成功
  return res.data
},()=>{
  Message.warning('请求错误,请求稍后重试')
})

export default Http
