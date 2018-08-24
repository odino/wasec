var qs = require('querystring')
var url = require('url')
var fs = require('fs')

function server (req, res) {
  let query = qs.parse(url.parse(req.url).query)

  if (query.clear === "on") {
    res.writeHead('302', {
      'Set-Cookie': [
        'example=a;Expires=Wed, 21 Oct 2015 07:28:00 GMT',
        `example_with_domain=a;Domain=wasec.local;Expires=Wed, 21 Oct 2015 07:28:00 GMT`,
        `supercookie=a;Expires=Wed, 21 Oct 2015 07:28:00 GMT`,
        `secure=a;Expires=Wed, 21 Oct 2015 07:28:00 GMT`,
        `not_secure=a;Expires=Wed, 21 Oct 2015 07:28:00 GMT`,
      ],
      'Location': '/'
    })
    res.end()
    return
  }

  let headers = {}
  headers['Set-Cookie'] = []

  if (!req.headers.host.startsWith('sub.wasec.local')) {
    headers['Set-Cookie'].push('example=test')

    if (query.domain === 'on') {
      headers['Set-Cookie'].push(`example_with_domain=test_domain_cookie;Domain=wasec.local`)
    }
  }

  if (query.super === 'on') {
    headers['Set-Cookie'].push(`supercookie=test;Domain=local`)
  }

  if (query.secure === 'on') {
    headers['Set-Cookie'].push(`secure=test;Secure`)
  }

  if (query.secure === 'on') {
    headers['Set-Cookie'].push(`not_secure=test`)
  }

  if (query.httponly === 'on') {
    headers['Set-Cookie'].push(`http_only_cookie=test;HttpOnly`)
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
    }

    document.getElementById('output').innerHTML = "Cookies on this document: <div>" + content + "</div>"
  </script>
<html>
`)
}

const options = {
  key: fs.readFileSync(__dirname + '/../wasec.local-key.pem'),
  cert: fs.readFileSync(__dirname + '/../wasec.local.pem')
};

require('http').createServer(server).listen(7888)
require('https').createServer(options, server).listen(7889)
