# Creating a DR Plan

Now before we create our DR plan, let's outline some DR strategies. There are some DR principles you should know.

- **Ensure infrastructure is deployed in another location**
  - Configuration drift - this is where the DR site is out of sync with the primary site. The goal is to minimize drift
  - Automation can help prevent configuration drift (we'll talk more about this later)
  - You can also manually bring both sites into compliance through policy and manual syncs
- **Must be practiced**
  - Actually flowing some production traffic through DR is critical to ensure the infrastructure actually works
  - Practicing annually or quarterly helps ensure the steps are still accurate and work as intended
- **Update the DR plan often**
  - Remember that technology is always changing and the DR plan should change with it
  - Adding or removing servers is a common practice so make sure to update the DR plan
  - Applications can be retired or added so they should also be added or removed from the plan

These strategies help us create a more resilient and more seamless DR experience:

- **DNS - domain name system**
  - Users don't have to memorize IPs and can use friendly names
  - DNS allows you to "hide" a specific IP of a data center or server to make failover more seamless
- **Database replication**
  - Ensures your database is exactly the same in both locations
  - Automatic and seamless failover with database replication, making sure the database can come back online quickly with little to no changes

Now, let's look at a high-level, basic DR plan.

- **Pre-steps**
  - Ensure both sites are configured the same
  - You can use infrastructure as code (IaC) to do this (we'll talk about this more later)
- **Steps**
  - Point your DNS to your secondary region
    - This can be done with a name provider like Amazon route 53
  - Failover your database replication instances to another region
    - Manually force the secondary region to become primary at the database level, or
    - Automatically failover the database by health checks
