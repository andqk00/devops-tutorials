# Summary: How Kafka Works

## How Kafka Works - Summary

In this section we learned:

- A Kafka Broker is an individual Kafka server
- A Kafka Cluster is a group of Kafka Brokers
- Kafka uses Zookeeper to elect topic leaders and store its own configuration
- Kafka writes log files to disk on the Kafka brokers themselves
- How Kafka achieves scale and parallelism with **topic partitions**
- How Kafka provides resiliency and helps prevent data loss with **data replication**

## How Kafka is secured?

Kafka is secured via mutual TLS (mTLS) or Simple Authentication and Security Layer (SASL). Configuring these security mechanisms is outside of the scope of this class. However, you can read more about them in this excellent [Confluent blog post](https://www.confluent.io/blog/secure-kafka-deployment-best-practices/). For hobbyist usage, Kafka is typically run unencrypted. However, if you are using Kafka at your job, or to transport sensitive information, you should either invest the time to secure Kafka or work with your company's security team to help you accomplish this.
