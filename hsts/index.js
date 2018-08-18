var qs = require('querystring')
var url = require('url')
var fs = require('fs')

const options = {
  key: fs.readFileSync(__dirname + '/localhost-key.pem'),
  cert: fs.readFileSync(__dirname + '/localhost.pem')
};

require('https').createServer(options, (req, res) => {
  let query = qs.parse(url.parse(req.url).query)
  let headers = {}

  if (query.hsts === 'on') {
    headers['Strict-Transport-Security'] = 'max-age=5'
  }

  headers['Location'] = 'http://localhost:7888'

  res.writeHead(302, headers)
  res.end()
}).listen(7889)

require('http').createServer((req, res) => {
  res.writeHead(200)
  res.end(`Can you see me?`)
}).listen(7888)
