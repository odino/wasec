# CORS example

Run this example with nodejs, through `node index.js`. You will also need to
have this line in your hostfile:

```
127.0.0.1 cors-test cors-test-2
```

You can then visit:

* [cors-test, which makes a request to cors-test-2 without CORS enabled](http://cors-test:78888/)
* [cors-test, which makes a request to cors-test-2 with CORS enabled](http://cors-test:7888/?cors=on)
