# WASEC: Web Application SECurity

Examples of security features (or mishaps) on web applications -- these are mostly
examples and tutorials from the [WASEC book](https://leanpub.com/wasec).

![](https://raw.githubusercontent.com/odino/wasec/master/clickjacking/cover.png)

## Installation

Add this line to your hostfile:

```
127.0.0.1 wasec.local sub.wasec.local wasec2.local
```

Each of the directories in this repo has its own `README`, so go ahead and explore!
A good place to start? Check the [clickjacking example](https://github.com/odino/wasec/tree/master/clickjacking).

Most of them can be run with NodeJS -- I am using `v10.1.0` but anything above
version 9 should work.

Everything has been tested on Google Chrome 65.
