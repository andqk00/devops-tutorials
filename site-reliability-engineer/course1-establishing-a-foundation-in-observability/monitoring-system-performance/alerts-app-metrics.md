# Creating Alerts for Application Metrics

## Alerts are the Most Important Part of Monitoring System

Monitoring is nothing without alerts

### It's essential to:

- Enable proper alerts to go to the appropriate teams
  - Ensure alerts are using the correct notification system (chat, e-mail, text)
- Configure alerts that will get you out of bed at 3 am.
  - Do not configure too many alerts. You will never sleep.
  - Keep alerting to a minimum. Too many alerts will cause you to ignore all of them.
  - Alert on symptoms of end-user pain.

### Good examples of alerts:

- CPU at 90% or above for the last 10 minutes
- The disk is at 90% capacity
- Synthetic monitoring has returned a non-200 HTTP code for the last 5 minutes for our production website.

The first two highlight potential issues and allow enough time to fix them before any significant outages. The third will need to be addressed immediately.

### Bad examples of alerts:

- CPU at 90% or above at all
- The disk is less than 90% capacity; There is time to correct this in a non-emergency setting.
- Synthetic monitoring has returned a single non-200 HTTP code for our production website.

These alerts can all wait. Although the CPU may go above 90%, it does not stay there. It could go above 90% 500 times in an hour. As long as it does not remain above 90% for a long time, I would consider that unimportant.

The same goes for synthetic monitoring; minor connectivity issues can happen a few times a day. You only want to be alerted if the network issue persists for a duration of time.
