# HSTS example

Follow the common [installation instructions](https://github.com/odino/wasec#installation). Then, run this example with nodejs, through `node index.js`.
You should also install [mkcert](https://github.com/FiloSottile/mkcert)'s root certificate with `mkcert -install`.

You can then visit:

* [the regular app, which redirects you from the HTTPS to the HTTP version](https://wasec.local:7889/)
* [the HSTS version, which redirects you from the HTTPS to the HTTP version, but sets an HSTS policy so that you will not be presented the HTTP version](https://wasec.local:7889/?hsts=on)
