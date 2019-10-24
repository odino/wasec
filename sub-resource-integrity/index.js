var qs = require('querystring')
var url = require('url')
var fs = require('fs')

let attack_integrity = "sha256-AN_INTEGRITY_THAT_DOESNT_MATCH"
let asset_integrity = "sha256-Z67eKNNu3z1gzgMcRCqRQo4f4gtT6pM0y6BHe/r5OGY="

require('http').createServer((req, res) => {
  let query = qs.parse(url.parse(req.url).query)
  
  if (req.url == "/attack.js") {
    res.end(`alert("attack")`)
  }

  if (req.url == "/asset.js") {
    res.end(`alert("valid asset")`)
  }

  let asset_integrity_check = ''
  let attack_integrity_check = ''

  if (query.sri) {
    asset_integrity_check = `integrity="${asset_integrity}"`
    attack_integrity_check = `integrity="${attack_integrity}"`
  }

  res.writeHead(200, {})
  res.end(`<html><body><script src="/asset.js" ${asset_integrity_check}></script><script src="/attack.js" ${attack_integrity_check}></script></body></html>`)
}).listen(7888)
