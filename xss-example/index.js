var qs = require('querystring')
var url = require('url')
var fs = require('fs')

require('http').createServer((req, res) => {
  res.writeHead(200, {
    'X-XSS-Protection': 0,
    'Content-Security-Policy': '*',
  })
  let search = qs.parse(url.parse(req.url).query).search
  search = search ? `You searched for ${search}` : `Try searching...`

  res.end(fs.readFileSync(__dirname + '/index.html').toString().replace('__SEARCH__', search))
}).listen(7888)
