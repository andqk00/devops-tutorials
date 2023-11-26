# Amazon DynamoDB

With Amazon DynamoDB, you have a fully managed service that handles the operations work.

## <u>I. Overview</u>

DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. With DynamoDB, you can offload the administrative burdens of operating and scaling a distributed database. You don't need to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.

With DynamoDB, you can do the following:

- Create database tables that can store and retrieve any amount of data and serve any level of request traffic.
- Scale up or scale down your tables' throughput capacity without downtime or performance degradation.
- Monitor resource usage and performance metrics using the AWS Management Console.

DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements. It does this while maintaining consistent, fast performance. All your data is stored on SSDs and is automatically replicated across multiple Availability Zones in a Region, providing built-in high availability and data durability.

## <u>II. DynamoDB core components</u>

In DynamoDB, tables, items, and attributes are the core components that you work with. A table is a collection of items, and each item is a collection of attributes. DynamoDB uses primary keys to uniquely identify each item in a table and secondary indexes to provide more querying flexibility.

![image](images/dynamodb-components.png)

## <u>III. DynamoDB use cases</u>

DynamoDB is a fully managed service that handles the operations work. You can offload the administrative burdens of operating and scaling distributed databases to AWS.

You might want to consider using DynamoDB in the following circumstances:

- You are experiencing scalability problems with other traditional database systems.
- You are actively engaged in developing an application or service.
- You are working with an OLTP workload.
- You care deploying a mission-critical application that must be highly available at all times without manual intervention.
- You require a high level of data durability, regardless of your backup-and-restore strategy.

DynamoDB is used in a wide range of workloads because of its simplicity, from low-scale operations to ultrahigh-scale operations, such as those demanded by Amazon.com.

- **Develop software applications**: Build internet-scale applications supporting user-content metadata and caches that require high concurrency and connections for millions of users and millions of requests per second.
- **Create media metadata stores**: Scale throughput and concurrency for analysis of media and entertainment workloads, such as real-time video streaming and interactive content. Deliver lower latency with multi-Region replication across Regions.
- **Scale gaming platforms**: Focus on driving innovation with no operational overhead. Build out your game platform with player data, session history, and leaderboards for millions of concurrent users.
- **Deliver seamless retail experiences**: Use design patterns for deploying shopping carts, workflow engines, inventory tracking, and customer profiles. DynamoDB supports high-traffic, extreme-scaled events and can handle millions of queries per second.

## <u>IV. DynamoDB security</u>

DynamoDB provides a number of security features to consider as you develop and implement your own security policies. They include the following:

- DynamoDB provides a highly durable storage infrastructure designed for mission-critical and primary data storage. Data is redundantly stored on multiple devices across multiple facilities in a DynamoDB Region.
- All user data stored in DynamoDB is fully encrypted at rest. DynamoDB encryption at rest provides enhanced security by encrypting all your data at rest using encryption keys stored in AWS Key Management Service (AWS KMS).
- IAM administrators control who can be authenticated and authorized to use DynamoDB resources. You can use IAM to manage access permissions and implement security policies.
- As a managed service, DynamoDB is protected by the AWS global network security procedures.

### **Best practices**

- **Use AWS CloudTrail to monitor AWS managed key use**: If you are using an AWS managed key for encryption at rest, usage of the key is recorded in AWS CloudTrail. CloudTrail can tell you who made the request, the services used, actions performed, parameters for the action, and response elements returned.
- **Use IAM roles to authenticate access to DynamoDB**: For users, applications, and other AWS services to access DynamoDB, they must include valid AWS credentials in their AWS API requests. Use IAM roles to obtain temporary access keys.
- **Use IAM policy conditions for fine-grained access control**: When you grant permissions in DynamoDB, you can specify conditions that determine how a permissions policy takes effect. Implementing least privilege is key in reducing security risk and the impact that can result from errors or malicious intent.
- **Monitor DynamoDB operations using CloudTrail**: When activity occurs in DynamoDB, that activity is recorded in a CloudTrail event. For an ongoing record of events in DynamoDB and in your AWS account, create a trail to deliver log files to an Amazon S3 bucket.
