var qs = require('querystring')
var url = require('url')
var fs = require('fs')

require('http').createServer((req, res) => {
  let query = qs.parse(url.parse(req.url).query)
  let headers = {}

  if (!req.headers.host.startsWith('sub.wasec.local')) {
    headers['Set-Cookie'] = ['example=test_cookie']

    if (query.domain === 'on') {
      headers['Set-Cookie'].push(`example_with_domain=test_domain_cookie;Domain=wasec.local`)
    }
  }

  res.writeHead(200, headers)
  res.end(`
<html>
  <div id="output"/ >
  <script>
    let content = "none";

    if (document.cookie) {
      let cookies = document.cookie.split(';')
      content = ''

      cookies.forEach(c => {
        content += "<p><code>" + c + "</code></p>"
      })

      console.log(content)
    }

    document.getElementById('output').innerHTML = "Cookies on this document: <div>" + content + "</div>"
  </script>
<html>
`)
}).listen(7888)
