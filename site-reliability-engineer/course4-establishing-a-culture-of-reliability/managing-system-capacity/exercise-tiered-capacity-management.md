# Exercise Tiered Capacity Management

## Emergency Capacity Tier

### Sample solution

The emergency capacity tier is used when there is unexpected demand that would otherwise cripple a system. While we may not need the extra capacity all the time, there are busy times when user demand far exceeds our "normal" peak usage. We should be able to bring this extra capacity online quickly when we need it, and then take it offline when it is no longer needed. It is marginally more to maintain the extra instances than it would be without them, but it is far less expensive than having the instances on all the time. In short, the small expense it takes to have these resources available is well worth it to keep our services running at peak performance for our customers.

### Comments

While your answer will be different from the sample above, it is important that you highlight the following:

- Emergency capacity is used when there is excess, unexpected demand.
- Emergency capacity can be brought online quickly and is only a temporary measure.
- There is a cost to maintaining the extra capacity but it is worth it to prevent an outage.

## Long-Term Capacity Planning

### Sample solution

To plan for future capacity, we are watching several metrics to determine when to add more capacity. For example,

1. We can look at how many new users we are onboarding. After reaching a user threshold, we can start to add more resources to meet demand.
2. We will be monitoring response times as well as other system performance metrics. If there is a decline in service, either when features are added or customer demand skyrockets, then we will need to increase capacity.

By using these triggers, we can avoid over-provisioning and only add resources as needed. This means, however, that we have to be proactive about adding new resources when they are needed, since there is overhead in provisioning and bringing online additional resources.

We do have the emergency capacity to meet short-term, unmet demand if needed, but it is not ideal for a long-term solution. Also, if growth is greater than expected, we could potentially exceed both emergency and current resource allocations.

### Comments

While your answer will be different from the sample above, it is important that you include the following:

- At least 2 metrics that would trigger adding extra capacity
- Benefits of these metrics
- Potential pitfalls of the plan of adding extra capacity
