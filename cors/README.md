# CORS example

Run this example with nodejs, through `node index.js`. You will also need to
have this line in your hostfile:

You can then visit:

* [a GET request to sub.wasec.local that fails, because CORS is not enabled](http://wasec.local:7888/)
* [a GET request to sub.wasec.local which gos through, because CORS is enabled](http://wasec.local:7888/?cors=on)
* [a POST request to sub.wasec.local that requires a preflight request, which fails](http://wasec.local:7888/?method=POST)
