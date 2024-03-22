# Categories for SLOs

## Availability

- Is the application available to users?
- It could measure the successful requests to an application.
- Example SLO: application is up 99% of the time over the last 7 days.
    - SLI: total # of successful requests / total # of requests

### Error budget

- How much your infrastructure can be down? This includes outages AND maintenance.
- 10% error budget means you have served 10% failed requests (or 10 out of 100 requests to your site).
- Here are some additional calculations and results we can use for our example of a 10% error budget:
    - 90% availability
        - `availability = 1 - error budget`
    - 40% usage of error budget if 4 errors have occurred:
        - `usage = (error occurred)/(error budget)`
    - 60% usage remaining if 4 errors have occurred
        - `usage remaining = 1 - error budget usage`
- The goal of error budgets is to have LOW errors. The key difference between error budget and availability is error budget looks at **failed requests**, not necessarily successful requests.
    - An SLI for error budget could be the usage of the error budget.
        - the number of error requests/total number of requests in budget.

## Latency

- Latency is how fast you want your application to respond. Generally, the SLO is measured in milliseconds.
- Latency is measured in percentages and specifically quantiles. Quantiles are special because they allow us to look at distributions of data. This is better than averages because averages may hide outliers. We want to see the spikes as well.
- Example SLO: 90% of requests are served within 50ms.
    - SLI: 90th percentile latency over a 5 min period.

## Freshness

- This category is not as common as the others. The goal is to have the fastest and most accurate data.
- An example of freshness may be most recently written data.
- SLO example: 90% of requests are being read from the cache over the last 5 minutes.
    - SLI: requests read from the cache/requests not read from the cache.

## Correctness

- This category is not as common as the others. It measures how correct the data is.
- The data returned by an application conforms to a good know data set.
- SLO example: 99.9% of records compared are correct.
    - SLI: count of all requests that are correct / count of all requests.

## Throughput

- It measures how many loads your site can handle. It is often measured in requests per second (RPS).
- Sometimes it targets just the successful requests.
- Throughput can also refer to other areas such as database transactions
- SLO example: the site can reach 100 RPS over the last 5 minutes.
    - SLI: total number of requests over a period of time