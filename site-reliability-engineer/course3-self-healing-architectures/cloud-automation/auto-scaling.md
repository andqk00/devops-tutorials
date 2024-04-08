# Cloud Automation: Auto Scaling

Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.

An auto scaling group is a collection of microservices that are logically grouped together for automatic scaling and management. It can automatically scale an application based on events.

These events can be based on :

- Resource utilization. The configuration can monitor a service’s CPU or Memory utilization to determine load demands. For example, if memory utilization is greater than 90% the autoscaling group triggers a scaling event.
- Events could also be custom metrics determined by the engineering team, such as number of requests per second
- Events can be manual. For example, if you are anticipating a large volume of load in the case of a marketing campaign launch, you can manually scale your auto scaling groups

The fields that are typically necessary for an auto scaling configuration are:

- Minimum size. This is the minimum number of replicas supported by the group
- Desired capacity. The number of replicas an autoscaling group reverts back to after a scale-out event. This is greater than or equal to the minimum size.
- Maximum Size: This field is the maximum number of replicas supported by the group

Auto scaling configurations can help manage cloud costs by keeping the number of running applications to the minimum amount necessary to function and scale based on demand. They improve the resilience of healthy instances by ensuring that they will not incur failure due to load, as additional services will be brought in to support them.
