var qs = require('querystring')
var url = require('url')
var fs = require('fs')

require('http').createServer((req, res) => {
  let path = url.parse(req.url).pathname === '/' ? '/hummer.html' : url.parse(req.url).pathname
  let query = qs.parse(url.parse(req.url).query)
  let headers = {}

  if (query.xfo === "on") {
    headers['X-Frame-Options'] = "DENY"
  }

  if (query.csp === "on") {
    headers['Content-Security-Policy'] = "frame-ancestors 'none'"
  }

  res.writeHead(200, headers)
  let content = ""

  try {
    content = fs.readFileSync(__dirname + path)
    if (path.endsWith('.html')) {
      content = content.toString().replace('__QUERY__', req.url.replace('/', ''))
    }
  } catch (err) {}
  res.end(content)
}).listen(7888)
