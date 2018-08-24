# Cookies example

![](https://www.publicdomainpictures.net/pictures/10000/velka/33-1210498515t3lN.jpg)

Run this example with nodejs, through `node index.js`. You should have
`127.0.0.1 wasec.local sub.wasec.local` in your hostfile.

You can then visit:

* [wasec.local, which sets a host-only cookie](http://wasec.local:7888/)
* [the subdoamin sub.wasec.local, which doesn't have access to the host-only cookie](http://sub.wasec.local:7888/)
* [wasec.local?domain=on, which sets a cookie on the wasec.local domain and its subdomains](http://wasec.local:7888/?domain=on)
* [sub.wasec.local again, which has access to the Domain cookie](http://sub.wasec.local:7888/)
