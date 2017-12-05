const http = require('http')
const { Url } = require('url')

const hostname = '127.0.0.1'
const port = 3001


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    
    const reqUrl = new Url(req.url);
    if (reqUrl.pathname === '/exportHtml') {
        res.end('hello')
    }
    res.end('not found')
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在http://${hostname}:${port}/`)
})