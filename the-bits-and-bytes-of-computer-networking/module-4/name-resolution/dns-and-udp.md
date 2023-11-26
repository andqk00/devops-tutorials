# DNS and UDP

DNS is a great example of an application layer service that uses UDP for the transport layer instead of TCP.

A single DNS request and its response can usually fit inside of a single UDP datagram, making it an ideal candidate for a connectionless protocol.

It's true that caches of DNS entries are stored both on local machines and cashing name servers, but it's also true that if the full resolution needs to be processed, we're talking about a lot more traffic.

> A DNS server never needs to care about doing anything but responding to incoming lookups and a DNS resolver simply needs to perform lookups and repeat them if they don't succeed.
