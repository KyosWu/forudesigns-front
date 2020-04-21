import request from '../plugins/http'

//用户登录
function LOGIN(params){
  return request.post(`/rbac/auth/login/`, params)
}

// 用户注册
function REGISTER(params){
  return request.post(`/rbac/users/`, params)
}

export default {
  LOGIN,
  REGISTER
}
