# Key Connectors

In this section, you will learn how to use some of the most common Kafka Connectors, such as the JDBC sink and source connector and the FileStream Source connector.

One of the most common uses of Kafka in many organizations is the routing of log data from many disparate microservices.

While some logging tools do support integrations with Kafka, one of the easiest and most ubiquitous ways to pipe log data into Kafka is to use Kafka Connect.

- Kafka Connect can be configured to use a **FileStream Source Connector** to monitor changes in a file on disk. As data in that file changes, Kafka captures those changes and emits each new line as an event to a Kafka topic.

## JDBC Sinks and Sources

- JDBC = Java DataBase Connector. The JDBC API is used to abstract the interface to SQL Databases for Java applications. In the case of Kafka Connect, JDBC is used to act as a generic interface to common databases such as MySQL, Postgres, etc.
- JDBC Sinks are a common way to move data into Kafka from existing databases. Once the data is available in Kafka, it can be used in stream processing operations to enrich data or provide insights that may otherwise be missing
- JDBC Sources are a common way to move data out of Kafka to traditional SQL datastores. This is a common way of making stream processing insights available for more ad-hoc or batch querying.

## Kafka Key Connectors - Optional Further Research

- [Kafka FileStream Connector Documentation](https://docs.confluent.io/platform/current/connect/filestream_connector.html)
- [Kafka JDBC Source Connector Documentation](https://docs.confluent.io/kafka-connectors/jdbc/current/index.html)
