# Sub-resource integrity example

Run this example with nodejs, through `node index.js`.

You can then visit:

* [the homepage](http://wasec.local:7888/), where both a valid script and an attacker's script have been allowed to run
* [the page with SRI turned on](http://wasec.local:7888/?sri=on), where you will see that the attacker's script is not allowed to run