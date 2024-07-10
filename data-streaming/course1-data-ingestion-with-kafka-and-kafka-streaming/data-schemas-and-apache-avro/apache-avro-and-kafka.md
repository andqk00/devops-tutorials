# Apache Avro and Kafka

The Apache Kafka development community [decided early on to incorporate support for Avro into Kafka](https://www.confluent.io/blog/avro-kafka-data/) and Kafka ecosystem tools.

Although Avro is not required to use Kafka, and you can in fact use any other schema format you like, Avro is used extensively in the Kafka ecosystem, and using it will improve your experience.

- When using Avro with Apache Kafka, the producer must define an Avro Schema for messages they would like to produce to Kafka
- Many client libraries have built-in support for Avro
- When using the confluent_kafka_python library’s special Avro consumer, it will automatically unpack the Avro data it receives from Kafka using the Avro schema that was packaged alongside it

While it does take a little more effort to define your schema in Avro, versus JSON or plain text, you will be grateful to have spent that effort when your application tolerates downstream data changes more gracefully!

> **Helpful Documentation**
>
> - `confluent_kafka_python` [Avro Producer](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.avro.AvroProducer)
> - `confluent_kafka_python` [Avro Consumer](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.avro.AvroConsumer)

## Schema Registry

[Confluent Schema Registry](https://docs.confluent.io/platform/current/schema-registry/index.html) is an open-source tool that provides centralized Avro Schema storage. In this section, you’ll learn how Schema Registry can improve your Kafka Stream Processing applications.

### Kafka - Schema Registry Integration

Sending an Avro schema definition alongside every message:

- introduces some additional network and storage overhead in our producer and consumer applications
- introduces additional work on the consumer and producer to correctly serialize and deserialize from Avro

**Schema Registry** is a tool built by Confluent and deployed alongside Apache Kafka that can help reduce some of the overhead involved with using Avro.

- if Schema Registry is in use in a cluster, there is no need to send schemas alongside payloads to Kafka
- the Kafka client can be configured to send the schema to the schema registry over HTTP instead

Schema Registry:

- assigns the named schema a version number
- stores the version number in a private topic and the producer never needs to send the schema to either the Schema Registry or the Kafka broker, until the schema definition is updated again
- can pull historical schemas as well, so all data stored in the Kafka topic can be deserialized by clients.
- does not support deletes by default
- can be used by any application that wants to efficiently store and retrieve schema data across multiple versions
- is typically used by Kafka clients, but it has also been utilized by applications that are not interacting with Kafka

When using schema registry, Consumers and producers only fetch a schema when they don’t have it in memory. Once they’ve fetched a schema version, it is never fetched again. This can dramatically decrease networking overhead for high-throughput topics.

### Schema Registry Architecture

At its core, Schema Registry is simply a web server built on the JVM using Java and Scala.

- it is highly portable
- it will run on just about any operating system
- it utilizes Kafka itself to store data in a schemas topic
- it uses compaction to ensure that no data loss occurs

You can run more than one schema registry node at a time, to form a schema registry cluster. However, only one schema registry node at a time acts as the leader for the cluster. The leader, as with Kafka, is chosen by using Zookeeper to perform elections.

![image](images/schema-registry.png)
