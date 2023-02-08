// 引入express模块
const app = require("express")()
// http启动node服务器
const http = require("http").Server(app)
// 响应读取模块
const express = require("express")
// 设置静态文件目录
app.use(express.static('./dist'))

http.listen(8020, "192.168.243.4", function () {
    console.log("listening on 192.168.243.4:8020")
})