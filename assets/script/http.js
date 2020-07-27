class CusHttp {
  constructor () {
    this._http
    this._callback
  }
  /**
   * Get 请求
   * @param {*} Url 
   * @param {*} cb 
   */
  Get (Url, cb) {
    let http = cc.loader.getXMLHttpRequest()
    http.open("GET", Url, true)
    http.setRequestHeader("Content-Type","application/json;charset=UTF-8")
    this._callback = cb
    http.onreadystatechange = this._result.bind(this)
    http.timeout = 10000
    http.send()
    this._http = http
  }
  Post (Url, data, cb) {
    data = JSON.stringify(data)
    let http = cc.loader.getXMLHttpRequest()
    http.open("POST", Url, true)
    http.setRequestHeader("Content-Type","application/json;charset=UTF-8")
    this._callback = cb
    http.onreadystatechange = this._result.bind(this)
    http.timeout = 10000//超时10秒
    http.send(data)
    this._http = http
  }
  _result () {
    if (this._http.readyState == 4) {
      if (this._http.status == 200) {
        if (this._callback) {
          this._callback(this._http.response)
        }
      }else{
        console.log(this._http.response)
      }
    }
  }
}

const http = new CusHttp()

export default http

