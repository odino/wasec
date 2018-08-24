var qs = require('querystring')
var url = require('url')
var fs = require('fs')

require('http').createServer((req, res) => {
  let query = qs.parse(url.parse(req.url).query)
  let headers = {}

  if (query.cors === 'on') {
    headers['Access-Control-Allow-Origin'] = '*'
  }

  res.writeHead(200, headers)
  res.end(`text coming from ${req.headers.host}`)
}).listen(7889)

require('http').createServer((req, res) => {
  res.writeHead(200)
  res.end(fs.readFileSync(__dirname + '/index.html'))
}).listen(7888)
