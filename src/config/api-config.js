/**
 * 接口地址与请求方法
 * @type {{ name : {path: string, method: string} }}
 */
const common = {
  uploadPicture: {
    path: 'https://cs1.gzqqs.com/qqs/weixin/uploader/uploadPicture?',
    method: 'POST'
  },
  add: {
    path: 'qianjibianAdd.do?',
    method: 'GET'
  },
  list: {
    path: 'getqianjibianInfo.do?',
    method: 'GET'
  }
}

export default common
