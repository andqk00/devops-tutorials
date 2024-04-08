# Self-healing Micro-service Design

Let's take a look at some self-healing microservice design strategies:

- Health checks
- Load balancing
- Change management
- Graceful degradation
- Rate limiting

A **Health Check** is an API endpoint supported by the application that provides information on an application’s status. This could be text saying the application is still running, resource utilization information, or Engineering specific metadata such as uptime, number of replicas, or number of errors encountered

**Load balancing** is the act of sending an equal amount of requests to a group of supported applications. This can be done in a round-robin fashion such that no application in the group gets overloaded by requests during a surge of activity.

**Change management** is the process of keeping track of each change in an application, and version controlling releases to cloud environments. These are saved states of the application code bundled and determined ready for release. This provides us with confidence during a deployment that the code behavior we are seeing in the dev environment is the same behavior we will see in the staging and production environments. This is known as version parity.

**Graceful degradation** is the ability of a microservice to gracefully shut down after receiving a termination signal from the system. This typically happens during a scale IN event or during a new deployment, when older versions are being removed from the system.

**Rate limiting** is the ability to cap the number of requests a microservice can handle during a surge of requests. This is a preventative measure to protect a microservice from crashing because it is unable to handle the load.
