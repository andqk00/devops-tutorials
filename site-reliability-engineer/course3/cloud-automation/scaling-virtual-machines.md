# Scaling Virtual Machines

Scaling virtual machines (VMs) is very similar to scaling microservices. It can happen in two ways:

- Scaling up, also known as vertical scaling, is upgrading a VM with more CPU or memory capacity
- Scaling out, also known as horizontal scaling, is the act of replicating the VM. This typically happens in an autoscaling group that controls how many replicas to create.

You typically want to scale a VM when a workload's resource utilization is dynamic.

- The need for CPU and memory can potentially grow or shrink over time. Putting a VM in an auto scaling group allows you to dynamically increase or decrease the CPU or memory resources available to the workload.

Examples of dynamic workloads are:

- **Microservice clusters**: VMs are used to create a cluster of resources for your deployed services
- Processing data from a queue. You may scale proportional to the number of items in the queue that require processing

The fields that are typically necessary for auto scaling VM’s are:

- Minimum Size
- Desired Capacity
- Maximum Size
