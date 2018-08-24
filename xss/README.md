# XSS example

Run this example with nodejs, through `node index.js`.

You can then visit:

* [the homepage](http://wasec.local:7888/)
* [the search result page](http://wasec.local:7888/?search=A+lovely+kitten)
* [a successful XSS attack](http://wasec.local:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E)
* [a CSP violation reported to the console](http://wasec.local:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E&csp=report)
* [a mitigated attack through CSP](http://wasec.local:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E&csp=on)
* [a mitigated attack through X-XSS-Protection](http://wasec.local:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E&xss=on)
* [a mitigated attack through the browser's XSS auditor (if supported by the browser)](http://wasec.local:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E&xss=off)
