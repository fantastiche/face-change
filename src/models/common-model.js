import apiConfig from '../config/api-config'
import $http from '../util/api-util'

// 添加信息
function add (params, successCallback, failCallback) {
  let api = apiConfig.add
  $http(api, params, function (res) {
    successCallback(res)
  })
}

export default {
  add
}
