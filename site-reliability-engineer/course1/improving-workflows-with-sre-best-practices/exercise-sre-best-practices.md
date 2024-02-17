# Exercise SRE Best Practices

## 1. Create a scenario using the SRE best practices that you just learned about. Be sure to include examples of each best practice.

## 2. Create an outline document for a postmortem.

**Summary**

Impact:

[Summary of the users impacted and length of time]

Root Cause:

[Description of the issue]

**Technical Summary**

Mitigation Steps

- [Step 1]
- [Step 2]

Prevention Measures:

- [Describe what is being done to prevent a future outage]

Summary/Notes:

[Summary of the incident or extra notes]

Attach Data/Graphs

## 3. Create a launch checklist. Use the items which go into a product release.

- Create a new cluster at the same private subnet
- Setup cluster parameters if needs such as CPU, RAM thresholds (FCI side)
- Apply network policies for connecting databases, bastion
- Setup Nginx load balancer
- Setup Argocd, backup and restore all apps from Argocd in the old cluster to the new one (stateless only, skip migrating PVC)
- Setup monitoring
- Test apps, monitor
- Release static IP from old load balancer and associate with the new one (have some downtime)
