# When To Use Availability and DR

When should use and not use disaster recovery and availability? Keep the following in mind:

- **Duplicate infrastructure in multiple sites can lead to:**
  - Increased maintenance costs and licensing costs since everything must be duplicated
  - Increased overhead, though this can be mitigated with scripts and infrastructure as code
  - Cost is all a balancing act vs. losing your entire infrastructure
- **DR is NOT backups**
  - Backups should always be used regardless of DR/HA plans
  - Backups recover from data loss such as accidental deletion or malicious actors
  - Backups are cheaper than other DR/HA methods
  - But, backups also have the slowest recovery time
  - DR/HA methods have faster recovery and replication time but they cannot be used to mitigate the risk of total data loss like backups can
