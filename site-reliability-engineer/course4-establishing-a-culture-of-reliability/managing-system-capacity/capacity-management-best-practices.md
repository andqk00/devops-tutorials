# Capacity Management Best Practices

## Monitoring Your System for Overload

This section is all about **monitoring your system for overload**. You should monitor both demand and system resources.

- **Demand**
  - Determine demand by looking at the number of users and requests coming in and the amount of system resources utilized.
  - As demand rises, so does the amount of system resources needed to maintain a functioning system.
- **Resource utilization**
  - Early warning sign for capacity issues.
  - Look out for low demand but high utilization scenarios, due to users performing more complex operations.
  - Should receive alerts before the user experience is impacted.
- **User experience**
  - Metrics include response times and error rates.
  - The higher these metrics, the poorer the user experience. This should be handled immediately.

## Mitigating Capacity Issues

Since monitoring alone is not enough, you will need mitigation strategies in place to handle a capacity overload.

- **Emergency capacity tier**
  - Emergency capacity is your first line of defense against capacity overload.
  - As you reach your capacity threshold, you should bring the extra capacity online quickly to relieve pressure on the system.
  - Return resources to the powered-down state after the need has passed.
  - Automate the process of bringing resources online and powering them down if possible.

When demand exceeds all your available capacity, i.e., both the emergency and your normal capacity, it is important to keep your system at least semi-functional. Here are some strategies for mitigating overload or capacity outages:

- **Load shedding**
  - Reduce load on the system by rejecting new requests.
  - Allows the system to focus on the existing workload.
- **Graceful degradation**
  - Stop performing non-critical tasks.
  - Frees resources for tasks that are vital to the system.
- **Timeouts**
  - Requests should eventually time out.
  - Prevents requests from building up that will never be fulfilled.
- **Denial of Service (DoS) prevention**
  - Have protections in place to prevent DoS attacks.
  - A security measure to prevent bad actors from flooding your system with illegitimate requests.
