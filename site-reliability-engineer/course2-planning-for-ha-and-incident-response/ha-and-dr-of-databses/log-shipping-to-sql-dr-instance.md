# Explore Log shipping to a SQL DR instance

## What is log shipping?

Put simply it is a **replication mechanism** for database management systems. Log shipping goes of the concept of transactions. Databases group together queries into transactions. For instance, if you checkout at a store, each line item on your receipt could be a completed transaction in a database. These transactions are written to **log files**. These log files grow quickly and need to be rotated through. Rotation means deleting the oldest logs. So if you say you want 7 days of logs, the oldest logs are 7 days old.

In log shipping, these transaction logs are shipped to another cluster and that cluster restores the logs and then could be used to take traffic.

![image](images/basic-log-shipping.png)

The secondary instance may be unavailable during the restore operation, but after the restore, it is ready to serve as a **read-only copy** or become primary in the event of a failure.

A read-only copy is where the secondary could be used by the application for just reads but not writes. This could reduce the load on the primary cluster.

Note that we should separate database clusters into separate availability zones in the cloud provider to improve availability.

![image](images/log-shipping.png)

One step further we can have a **monitor** in a separate zone. A monitor will watch the log shipping and alert either an admin or the other nodes if it sees a problem. It serves as the third pair of eyes to ensure everything is working as it should.

## What are some pros and cons of log shipping?

### Pros:

- Easy to setup
  - Generally, no advanced setup and the secondary instance is easy to set up in another region
- Low cost
  - Generally, no additional software is required
  - Generally, no additional hardware is required
  - Low admin overhead

### Cons:

- Manual failover
  - Log shipping requires a manual failover to the secondary cluster
  - May need to re-configure applications to point to the new primary cluster
- Slow recovery
  - Time required to fully apply the backup
- Slow fail-back
  - Must re-configure log shipping and perform a full restore to failback
