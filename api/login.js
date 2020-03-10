import axios from 'axios'


const BASEURL = '/api'

//用户登录
function LOGIN(params){
  // console.log(params)
  let {username, password} = params
  return axios.post(`/rbac/auth/login/`,{ username:username, password:password})
}


export default {
  LOGIN
}
