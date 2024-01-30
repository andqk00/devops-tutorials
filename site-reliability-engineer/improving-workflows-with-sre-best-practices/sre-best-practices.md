# SRE Best Practices

## On-call & Incident Response

- Primary/secondary contacts are on-call one week a month. With a secondary contact, if you happen to be away from the phone, the call - will divert to that person.
- The on-call contact only handles essential events.
- Instituting a "follow the sun" model to eliminate night shifts.
- Limit the number of incident responses to two per shift.
- Have playbooks (see the example below) that are comprised of escalation paths and incident-management procedures.

## Postmortems

Events that occur which lead to the creation of post-mortems:

- Data-loss
- On-call engineer intervention, which comes from an alert or a phone call
- Failures with monitoring or visible downtime

Items to include in a post-mortem:

- A record of an incident and its impact
- Actions taken to mitigate the incident
- The incident root cause
- Any prevention measures
- Identification of the causes of system failure, not pointing fingers

Instituting a blameless post-mortem culture:

- The problem and system failure
- Involving everyone on the team
- Collecting thoughts and solutions from smart people
- Finding a permanent solution

## Reliable Product Releases

Architecture and dependencies:

- Latency requirements
- Request flow from front-end to back-end
- The volume of requests

Integration consists of:

- DNS
- Load balancing
- Monitoring

Failure Modes are:

- Single-points of failure
- Mitigation tactics of failure within the system

Process and Automation highlights:

- Any manual process
- Documentation

Rollout Planning involves:

- How the change goes live
- Canary deployments

## PLAYBOOK EXAMPLE

Tied to alert [ALERT_NAME]

**Summary:**

The application and web services intermittently fail to connect to the database and need to be restarted. Check the logs for connection failures and restart the application.

**Summary of architecture:**

There is a web application [NAME] and a web service [NAME] that connect to a SQL Database [NAME and LOCATION OF SQL DATABASE]

- Log Locations
  - Error log
    - /var/log/myapp/myapp-error.log
    - /var/log/myapp-service/myapp-service.log
  - Application log
    - /var/log/myapp/myapp.log

**Remediation Steps:**

Login to [SERVER_NAME] and run the **myapp-restart.sh** script. Once myapp restarts, run the **myapp-service.sh** script. The connection to the database should be restored. Verify successful connections in the log files.
