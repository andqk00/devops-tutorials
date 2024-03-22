# Exercise What are SLOs and SLIs?

For `successful HTTP requests per minute`, the SLOs can be:

- 99% of orders complete without errors
- Only 1% of traffic results in an error or errors (think your error budget)

For `latency of a backend web server response`, the SLOs can be:

- 99% of requests complete within 50ms
- Be able to sustain 500 visitors per minute while keeping the latency below 50ms

For `unsuccessful HTTP requests per minute`, the SLOs can be:

- 99% of orders complete without errors
- Only 1% of traffic results in an error or errors (think your error budget)

For `latency of frontend response`, the SLOs can be:

- 99% of requests complete within 50ms
- Be able to sustain 500 visitors per minute while keeping the latency below 50ms

For `API response codes`, the SLOs can be:

- 99% of orders complete without errors
- Only 1% of traffic results in an error or errors (think your error budget)

For `database operations per second/minute`, the SLOs can be:

- 5 orders per minute
- Be able to sustain 500 visitors per minute while keeping the latency below 50ms

For `indexing rate`, the SLOs can be:

- 5 orders per minute
- 99% of requests complete within 50ms
- Be able to sustain 500 visitors per minute while keeping the latency below 50ms

For `percentile bucket of requests per minute`, the SLOs can be:

- 99% of requests complete within 50ms
- 99% of orders complete without errors

For `session creation time`, the SLOs can be:

- 99% of requests complete within 50ms
- Be able to sustain 500 visitors per minute while keeping the latency below 50ms

For `query return time`, the SLOs can be:

- 5 orders per minute
- 90% of requests are read from the cache layer

For `the number of requests read from cache`, the SLOs can be:

- 90% of requests are read from the cache layer
- 99% of requests complete within 50ms
- 5 orders per minute

For `the total number of requests`, the SLOs can be:

- 99% of requests complete within 50ms
- 99% of orders complete without errors
- Be able to sustain 500 visitors per minute while keeping the latency below 50ms

For `correctness probe` (this basically injects known data and measures to make sure the output is correct), the SLOs can be:

- 99% of orders do not contain an error