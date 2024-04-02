# Self-healing Automation Strategies

Let's take a look at some self-healing strategies that can be automated:

- Scaling
- Fault Tolerance
- High Availability

### Automating Scaling

Scaling is the act of replicating an application, so that the load is shared across multiple replicas of an application based on load demand. You can think of the demand as creating a hotspot in the architecture that is cooled down by increasing the number of applications available to process requests. There are 3 types of scaling:

- **Scaling Up.** Upgrading the VM the application is deployed on, such as increasing CPU or memory. This is also known as **vertical scaling**
- **Scaling Out.** The ability to replicate an application so that the load is shared across multiple replicas of the application based on load demand. This is known as **horizontal scaling**. Horizontal scaling ensures that failing apps can recover or fall off, while fresh applications take over to handle the load.
- **Scaling In.** This is the inverse of scaling out. This is the reduction of replicas due to a drop-off in load. The ability of an application to scale out & in without failure is known as **elasticity**.

### Automating Fault Tolerance

Fault tolerance is the ability to continue operating despite failures or malfunctions. A fault-tolerant environment has zero service interruption but incurs a higher cost due to the automation complexity and standby infrastructure costs to maintain such a state. For example, multi-region databases can automate the fault-tolerance.

- A database is created in a primary regional zone and a replicated standby database is created in a secondary regional zone .
- During activity, the primary database is actively replicated to the secondary database. In case of failure, the DNS record associated with the primary database switches to the secondary database and resumes processing requests seamlessly without interruption.

### Automating High Availability

High availability is similar to fault tolerance in that it is the ability to continue operating despite failures or malfunctions.

- A high availability environment incurs minimal service interruption vs. zero and can be cheaper in respect to automation complexity because there are **no standby infrastructure costs**. For example, read replicas in databases ensure high availability.
- A database is broken down into nodes that allow writes, and nodes that only allow reads, since in most scenarios a database incurs far more reads than it does writes.
- The reader nodes are put behind a load balancer and in an autoscaling group that scales **out** and **in**, based on load.
- During database activity, the writer node has its data actively replicated to the reader nodes. In the case of a critical failure, one of the reader nodes can be promoted to be a writer node with minimal interruption.

> **Fault-tolerance versus high availability**: A fault-tolerant environment has no service interruption but a significantly higher cost. In contrast, a highly available environment has minimal (less than a minute) service interruption.
