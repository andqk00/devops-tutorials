# When To Use High Availability and DR of Databases

When should we use database recovery and HA? The short answer is most of the time, but what strategy we use can vary. The end goal remains the same - **ensure the function of a business**. We covered 3 strategies that can fit different needs and budgets.

- **Backups**
  - Slow
  - Cheap
- **Log shipping**
  - Faster
  - Mid-level
- **Geo-replication**
  - Fastest
  - Most expensive

Even though most of the time we should use a form of recovery, there are times when we shouldn't:

- **Cost prohibitive** - many strategies can be expensive so cost may prevent implementation. However, at a minimum backups are recommended even if only quarterly. Not having any recovery is not recommended.
- **Temporary data** - if there is temporary data that we don't need to keep for a long time or is deemed acceptable to lose, we do not need recovery for that data.
