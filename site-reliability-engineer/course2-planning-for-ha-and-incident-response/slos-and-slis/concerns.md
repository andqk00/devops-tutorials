# Concerns When Using SLOs and SLIs

While metrics are great and have many advantages, they do have some downsides:

### Too many metrics

- Too many metrics can slow down a system or application because there is so much to process. It also takes additional resources.
- There may be so many metrics to manage and keep track of. Therefore, it can be a huge admin overhead just to manage them all.

### Alert numbness

- Alert numbness means that so many irrelevant or inaccurate alerts that make you begin to ignore the alerts, even alerts that need action.
- There are some reasons that cause this:
  - SLO thresholds can be too low that you get alerted all the time. The important alerts are buried under the non-important ones.
  - Take wrong measurements because you are targeting the wrong areas. These areas either generate too many alerts or no alerts at all.

### Lack of metrics

- Some applications may have no metrics or very little, so some SLOs may not be possible to track.
- You can use available metrics such as CPU/memory but be sure to set specific timeframes and make them as specific to the application as possible.

### Infrastructure metrics are still important

- CPU, memory, etc. may still be needed for a full picture and may still indicate problems.
- These metrics also help to be proactive when knowing when to add more resources.
- Just be sure to use specific timeframes and make these metrics as specific to the application as possible.
