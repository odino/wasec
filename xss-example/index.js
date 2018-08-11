var qs = require('querystring')
var url = require('url')
var fs = require('fs')

require('http').createServer((req, res) => {
  let query = qs.parse(url.parse(req.url).query)
  let headers = {
    'X-XSS-Protection': 0
  }

  if (query.csp === 'on') {
    headers['Content-Security-Policy'] = `default-src 'self'`
  }

  if (query.csp === 'report') {
    headers['Content-Security-Policy-Report-Only'] = `default-src 'self'`
  }

  res.writeHead(200, headers)
  let keyword = query.search || ''
  let results = keyword ? `You searched for "${keyword}", we found:</br><img src="http://placekitten.com/200/300" />` : `Try searching...`

  res.end(fs.readFileSync(__dirname + '/index.html').toString().replace('__KEYWORD__', keyword).replace('__RESULTS__', results))
}).listen(7888)
