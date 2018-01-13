import apiConfig from '../config/api-config'
// import config from '../config/config'
import axios from 'axios'

function uploadImg (parms, successCallback) {
  let url = apiConfig.uploadPicture.path
  // let host = config.host
  // let url = host + port

  axios.post(url, parms).then(function (res) {
    successCallback(res.data)
  })
}

export {
  uploadImg
}
