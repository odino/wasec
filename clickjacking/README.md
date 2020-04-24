# Clickjacking example

![](https://raw.githubusercontent.com/odino/wasec/master/clickjacking/cover.png)

Follow the common [installation instructions](https://github.com/odino/wasec#installation). Then, run this example with nodejs, through `node index.js`.

You can then visit:

* [a malicious win-a-hummer website that uses clickjacking to steal all your money from another URL! (no worries, it's safe to click links in the example :))](http://wasec.local:7888/)
* [the same attack, prevented through X-Frame-Options (check the JS console)](http://wasec.local:7888/?xfo=on)
* [the same attack, prevented through Content Security Policy (check the JS console)](http://wasec.local:7888/?csp=on)
