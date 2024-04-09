# Analyzing Reliability Risks

Now, we can put all of the pieces together to get a full review of the system. We have:

1. **Known issues**
    - Use post-mortems and on-call logs and look for patterns to alerts and issues.
    - The point is to dig down to the root causes.
    - Make sure remediation was completed.
2. **As-built document**
    - Compare the current state to known issues in the post-mortems to determine how likely the risk is to lead to an incident and ways to mitigate it.
    - Compare the as-built doc to the design doc to find risks and have them addressed before launch.
3. **Launch review**
    - Ensure all action items are completed.
    - Compare the launch review checklist to the as-built doc to determine where new risks are being introduced and which ones are being resolved as the application/system evolves.
    - Update the checklist to reflect any changes or missed opportunities.