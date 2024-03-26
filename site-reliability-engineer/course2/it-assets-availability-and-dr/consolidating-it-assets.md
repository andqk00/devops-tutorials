# Consolidating IT Assets

Let's say you identified a number of redundant assets such as 3 account servers, 3 finance servers, and 3 database servers for each. While there is redundancy for availability, is it too much? Remember it is adding cost and complexity to have that many servers. Why would a business want to consolidate?

- Cloud-centric
  - Many cloud resources are focused on consolidation by having serverless or non-managed resources
- Cost-effective
  - Less software, less hardware, less overhead
  - Cloud could be billed per hour or per transaction or how many instances you are running
- Simpler management
  - Less work
  - Fewer dependencies and fewer failures
  - High complexity means higher skillsets for admins and more areas for failure and more to document
- Better availability
  - Cloud providers have HA built into many services
  - Single app on a single group of servers

How do we know what to consolidate? There are a number of ways we can tell. Some of these may be beyond the information available to you readily and you may have to work with other departments and resources to find similarities. However, two main ways to start is to look for:

- Similar departments
- Similar functions

Take an example. We can see here where we consolidated similar HR functions onto fewer servers and created a much simpler architecture:

- Current setup
  - 3 web servers running an HR application
  - 3 database servers serving the HR application
  - 3 web servers serving the recruiting system
  - 3 database servers serving recruiting system
- Consolidated setup
  - 3 web servers running HR applications
  - 3 database servers serving the HR application

Now just to be clear there may be times where consolidation may not be possible. Here are some possible reasons:

- You may not know the reason for separation such as security dictates certain functions MUST be separation.
- Resources dictate separation. Some applications may be so large they cannot be shared with others.
- More risks - if one server fails, potentially more applications fail.
