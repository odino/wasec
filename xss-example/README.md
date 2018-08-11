# XSS example

Run this example with nodejs, through `node index.js`.

You can then visit:

* [the homepage](http://localhost:7888/)
* [the search result page](http://localhost:7888/?search=A+lovely+kitten)
* [a successful XSS attack](http://localhost:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E)
* [a CSP violation reported to the console](http://localhost:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E&csp=report)
* [a mitigated attack through CSP](http://localhost:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E&csp=on)
