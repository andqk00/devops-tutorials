# On-Call Best Practices

## Balanced On-Call

Having a balanced on-call shift is essential to preventing burnout and increasing productivity. Balanced on-call shifts mean having both a good work/life balance as well as balancing on-call work with operational work.

One way to ensure on-call shifts are balanced is through on-call logs. On-call logs can be used in several ways:

- Track time spent on on-call tasks.
- Track frequency and patterns of the alerts.
- Record resolutions as a starting point for troubleshooting similar alerts.

In order to do this, your on-call logs need to contain:

- Date and time of the issue
- Summary of the alert
- Resolution

Logs should be stored in a central location that is searchable to make them most useful. As a team, you should be regularly reviewing these logs looking for trouble areas.

Some strategies for dealing with unbalanced on-calls include:

- Evaluate thresholds for alerts to ensure they are valid.
- Look for underlying causes for alerts.
- Pass on-call duties to maintainers of a service.
    - Set a reasonable goal for returning monitoring.
    - This should only be done for things that involve longer-term fixes.
- Embed an SRE in the team that maintains the service.
    - The SRE can help implement best practices to increase reliability.

## Best Practices

Some important on-call best practices to implement are:

- Define and document on-call processes:
    - Clearly define escalation paths.
    - Designate a backup engineer.
- The incident management procedure should be well-documented.

## Alert Levels

This is an example of what severity levels might look like for an organization and what action should be taken for each.

### Level 1: Low Impact

- Does not impact customer-facing services
- Can be handled during normal work hours
- Encompasses most dev systems and some QA systems
- Any system where there are multiple redundancies and if one fails, the system can continue functioning with no reduction in capacity
- Does not page during non-business hours

### Level 2: Extended Business Hour Alerts

- Does not impact customer-facing services
- Should be handled in a timely manner (before end of extended hours)
- Includes some QA services used for testing
- Pages during extended business hours

### Level 3: Medium Impact

- May impact customer-facing services slightly
- Should be investigated promptly
- Any system where there are multiple redundancy failures but the system is still functioning
- Will page at all times of the day
- Encompasses all production services

### Level 4: Major Impact

- Customer-facing services impacted significantly
- All instances of a service or system are down
- Must respond immediately
- Contact the designated incident commander to start the incident management procedure

### Level 5: Multiple System Failure

- Multiple customer-facing services impacted
- Multiple data centers are down
- All designated incident management team members will be paged
