# cf-region-proxy: programtic regional based request forwarding proxy using cloudflare

a way in which you can route any request you wish to from any region/juristion you want to, allowing for advanced retry logic, legal reasons, etc...

## custom headers

header prefix: `CFRP-`

- `Request`
	- this contains a seralized version of the request that needs to be sent out from that region
- `Region` (optional)
	- pick out from either the DO hint regions or the juristion
- `Mode` (optional)
	- `Optimal`: sends out requests to all possible regions and jursitctions and finds the most optimal one
- `Retry-Logic-Mode`
	- `Exponential`: exponential retry logic
	- `Regional`: initially start off with the closest location, and then expand out in terms of location. (low prority rn- later todo)
- `Retry` (optional)
	- `Count`: the amt of retries that is required
	- `Jiter`: the time diff between the retries