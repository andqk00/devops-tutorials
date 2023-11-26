# Introduction to Serverless

## <u>I. Removing the undifferentiated heavy lifting</u>

If you run your code on Amazon EC2, AWS is responsible for the physical hardware. You are still responsible for the logical controls, such as the guest operating system, security and patching, networking, security, and scaling.

As covered in the previous Container Services lesson, you choose to have more control by running and managing your containers on Amazon ECS and Amazon EKS. By doing so, AWS is still responsible for more of the container management, such as deploying containers across EC2 instances and managing the container cluster. However, when running Amazon ECS and Amazon EKS on Amazon EC2, you are still responsible for maintaining the underlying EC2 instances.

Is there a way to remove some of this undifferentiated heavy lifting? Yes! If you want to deploy your workloads and applications without having to manage any EC2 instances, you can do that on AWS with serverless compute.

## <u>II. Go serverless</u>

With serverless compute, you can spend time on the things that differentiate your application, rather than spending time on ensuring availability, scaling, and managing servers. Every definition of serverless mentions the following four aspects:

- There are no servers to provision or manage.
- It scales with usage.
- You never pay for idle resources.
- Availability and fault tolerance are built in.
