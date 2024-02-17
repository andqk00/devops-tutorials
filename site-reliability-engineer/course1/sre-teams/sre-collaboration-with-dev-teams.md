# SRE Collaboration with Development Teams

Ways to measure the inherent tension (which we have already learned about) between product development teams and SRE have emerged. Here are the ways this tension is measured:

## Software fault tolerance

- **Code structure** -- using modular blocks of code makes it easier to debug and fix errors.
- **Exception handling** -- programming for “what if”
- **Retry logic** -- e.g., if a connection is lost, the program retries until successful.

## Software Testing

- **Unit testing** -- basic levels of testing which evaluate code logic
- **Integration testing**-- testing software modules as a group
- **System testing** -- testing the entire software system

## Frequency of Deployments

- More deployments = more feedback on code
- Enables the team to deliver value to stakeholders more quickly
- Incorporate testing to provide quality code

## Error Budgets:

- A happy medium between the teams,
- Determines how unreliable an application can be within a quarter of a year.
- The product team sets an expectation of uptime,
- The SRE team measures the uptime
- Actual uptime vs expected uptime is compared.
  - If the actual uptime > expected uptime, new releases might be pushed
  - If the actual uptime < expected uptime, new releases are halted

So 99.99% allows for approximately 52 minutes of downtime per year, or 13 minutes a quarter. If the development team's release causes an outage for 5 minutes, then they would have 8 minutes left in the error budget for the quarter and can still release software. If the release causes 13 or more minutes of downtime, releases are halted for the rest of the quarter. This error budget resets to 13 minutes in the next quarter.

## Development Strategies for Mitigating Risk

**Feature flags** are code blocks that can be toggled on or off for a subset of users. The idea is to have a select group of users test the new feature, then roll it out to a wider audience in a later release.

**Releasing more minor changes more frequently:** changes may only be a few lines of code or a small function of the application. If an incident were to occur, it's easy to diagnose and fix.

**Isolating changes:** changes may only affect the database or the UI of the website, for example. If an incident were to occur, it's easy to diagnose and fix. Rolling back the change would only affect one component.
