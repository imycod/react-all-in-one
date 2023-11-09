const proxy = require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        proxy('/api',{
            target: 'https://6537c864a543859d1bb0d3b5.mockapi.io',
            ws: true, // 是否启用 WebSocket
            changeOrigin: true, // 是否修改请求头中的 Origin 字段
            rewrite: (path) => path.replace(/^\/api/, '')
        })
    )
}