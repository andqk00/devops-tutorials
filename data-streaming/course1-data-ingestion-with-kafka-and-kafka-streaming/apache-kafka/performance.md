# Performance

## Consumer Performance

### Metrics for Consumer Performance

The most important metric to understand for your Kafka Consumer is **consumer lag**.

- **Consumer lag** is measured by taking the difference between the current consumer offset, and the offset of the newest message for that topic partition.
- There will almost always be some consumer lag
- Kafka CLI tools to measure consumer lag.

If you notice that the consumer lag number continues to grow over time, though, that is an indicator that your consumer cannot keep up. In that case, you typically will need additional consumer processes in order to keep up.

Another important metric to measure is the number of messages per second passing through your Kafka topic.

- This number indicates the throughput of your topic
- It can be useful in understanding if you’re meeting performance goals
- It is typically calculated in conjunction with consumer lag

Kafka emits metrics for throughput via the Java Metrics Exporter, or JMX, so that you can hook this metric directly into your monitoring dashboards and alerting systems.

## Producer Performance

When a producer sends messages to Kafka, there is always some inherent latency in that process. Ideally, that latency number is small and consistent.

- High latency can indicate that your `acks` setting is too high and that too many ISRs nodes must confirm the message before returning.
- It may also indicate that too many partitions or replicas have been assigned to this topic.

Another metric to keep your eyes on is the **producer response rate**. This metric is an indicator of how many messages are being delivered over time.

- All of these metrics may be created by using producer delivery callbacks in the client library.

> **Note** - The ack setting defines the number of acknowledgements required by Kafka brokers before a produced event can be considered to have been successfully published. In libraries such as `librdkafka` we can fine-tune this parameter, defining a specific number of brokers that must acknowledge our message. If a Kafka cluster consists of many nodes, that means that every message we produce must be acknowledged by every one of those brokers. In the simple examples, we've gone through so far this is no problem. But in a typical Kafka production environment, the Kafka Server will be handling thousands or even millions of messages per second. Even on a powerful server with significant networking capability, the time spent acknowledging messages quickly becomes a bottleneck because of the CPU cycles and network overhead required to engage with every produced message on every broker.

## Broker Performance

The Kafka broker is the conduit through which data in a system flows.

- First, disk usage should be monitored as Kafka retains data, sometimes indefinitely.
- Network usage is a critical metric to measure.
- Election frequency is another important metric
