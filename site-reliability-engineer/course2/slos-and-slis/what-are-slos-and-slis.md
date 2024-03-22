# What are SLOs and SLIs?

- **Service Level Objectives (SLOs)** - They are objectives a business sets.
    - Example SLO: 99% availability of a website
- **Service Level Indicators (SLIs)** - They are service level indicators. They are how we measure SLOs:
    - Example SLI: total number of successful requests

You may have heard of **service level agreements (SLAs)** before. They are more traditional in that they are generally legal contracts between a service provider and the client. Basically, it's what the provider is obligated to do if they fail their end of the bargain. Note this is not an availability metric but simply a business agreement to keep the system online.

- Example SLA: 5 9's of availability or 99.999% uptime guarantee

SLOs in comparison to SLAs:

- SLOs detail specific objectives such as 99% availability
- SLOs do NOT define what happens when the objective isn't met
- SLOs/SLIs do not deal with underlying hardware metrics generally such as CPU and memory usage
- SLOs/SLIs measure application performance such as database query transactions

SLOs are made up of SLIs. Let's say your SLO is 90% successful requests. The SLI for that SLO could be the number of successful requests:

- `request_count { code == 200 }`

Another example of an SLO/SLI combination could be the following:

- SLO: Data change rate of 5% over 60 minutes
- SLI: `data_change_rate > 5% [60m]`