# Tiered Capacity Management

Planning for capacity means understanding resource usage and demand. Utilizing the **different tiers of capacity** allows you to handle present and future demands while having a reserve for emergencies.

1. **Short-term capacity**
   - Capacity for demand right now.
   - Based on current usage patterns, i.e. your current user count and resource usage.
   - Use load testing to determine needs.
2. **Long-term capacity**
   - Resources reserved for growth based on future predictions.
   - Since these resources will take time to bring online, you need to make sure you plan carefully to ensure a positive user experience and avoid wasting money.
3. **Emergency capacity**
   - Used when demand exceeds current resources.
   - The emergency tier refers to resources that can be brought online quickly to help handle a surge in demand. E.g., powered-down VMs that are pre-configured.
   - Incurs some additional costs, but less than leaving resources on and idle.
