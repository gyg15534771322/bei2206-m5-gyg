// 引入express模块
const app = require("express")()
// http启动node服务器
const http = require("http").Server(app)
// 响应读取模块
const express = require("express")
// 设置静态文件目录
app.use(express.static('./dist'))

http.listen(8020, "10.0.24.11", function () {
    console.log("listening on 101.43.171.100:8020")
})