# Kafka: A Stream Processing Tool

## Apache Kafka as a Stream Processing Tool

- Kafka is one of the most popular streaming data platforms in the industry today.
- Provides an easy-to-use message queue interface on top of its append-only log-structured storage medium
- Kafka is a log of events
- In Kafka, an event describes something that has occurred, as opposed to a request for an action to be performed
- Kafka is distributed by default
- Fault tolerant by design, meaning it is hard to lose data if a node is suddenly lost
- Kafka scales from 1 to thousands of nodes
- Kafka provides ordering guarantees for data stored within it, meaning that the order in which data is received is the order in which data will be produced to consumers
- Commonly used data store for popular streaming tools like Apache Spark, Flink, and Samza

## Kafka History

- Created at Linkedin to service internal stream processing needs
- Kafka is one of the Apache Foundation’s most popular projects
- Used widely in production. Some famous users include Uber, Apple, and Airbnb
- Creators of Kafka left LinkedIn to found Confluent, which now acts as the owner and leader of the Kafka project
- Jay Kreps, one of the core authors of Apache Kafka, named the system after Czech author Franz Kafka. Kreps, who enjoys Kafka’s work, thought the name was a good fit because Kafka was built to be a “system optimized for writing.”
