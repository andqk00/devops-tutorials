# Single Point of Failure

A **single point of failure** is a bottleneck that occurs when a system is impacted by the failure of a single component. This single component is sometimes referred to as a hotspot. A high activity zone in your system.

**An example of this is**: Every application needs to query a database for customer data

- You create a database reader API that will provide a shared suite of functionality for the microservices.
- This unintentionally introduces a single point of failure to the system.
- If that database reader goes down, the applications that depend on it become unable to complete their workloads successfully.

## Resolutions to Single Points of Failure

**High Availability**: This is a design pattern that ensures an application will always be available.

- implemented via scaling an application based on load demands.
- Scale the database reader to match the number of applications that need to access it, spreading the load and reducing hot spots.

**Disaster Recovery**: In case of a critical failure you are able to bring the application back to readiness. This is also known as **failover**.

- An inactive database reader application sitting in passive mode, waiting to be swapped in when the active reader goes down.

**Modularity**: This design pattern describes the ability of a component to be broken down into separate components.

- Spread the functionality of the database API across multiple microservices to reduce the hot zones. Or even get rid of it entirely, by converting the database API into a shared library.
- This shared library would be imported as a dependency in each of the microservices
