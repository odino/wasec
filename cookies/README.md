# Cookies example

![](https://www.publicdomainpictures.net/pictures/10000/velka/33-1210498515t3lN.jpg)

Run this example with nodejs, through `node index.js`.

You can then visit:

* [wasec.local, which sets a host-only cookie](http://wasec.local:7888/)
* [the subdomain sub.wasec.local, which doesn't have access to the host-only cookie](http://sub.wasec.local:7888/)
* [wasec.local?domain=on, which sets a cookie on the wasec.local domain and its subdomains](http://wasec.local:7888/?domain=on)
* [sub.wasec.local again, which has access to the Domain cookie](http://sub.wasec.local:7888/)
* [wasec.local?super=on, which tries to set a supercookie on the .local tld, but fails](http://wasec.local:7888/?super=on)
* [wasec.local?clear=on if you want to clear cookies](http://wasec.local:7888/?clear=on)
* [you can set a secure cookie at wasec.local?secure=on](https://wasec.local:7889/?secure=on), and verify that it is [not available when accessing the app via HTTP](http://wasec.local:7888/)
* [check that HttpOnly cookies are not available to JavaScript](http://wasec.local:7888/?httponly=on): open the devtools, you will see an additional cookie that's not printed on the webpage
* [try setting a SameSite cookie](http://wasec.local:7888/?samesite=on): then try executing a [cross-site request forgery](http://wasec2.local:7888/same-site-form)
and see the cookie is not sent along the request. If you instead navigate to [wasec.local:7888](http://wasec.local:7888) yourself you will see the cookie
sent across with the request
