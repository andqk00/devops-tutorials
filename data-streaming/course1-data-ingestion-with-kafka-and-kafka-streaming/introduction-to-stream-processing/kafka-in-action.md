# Kafka in Action

## Kafka Topic

- Used to organize and segment datasets, similar to SQL database tables
- Unlike SQL database tables, Kafka Topics are not queryable.
- May be created programmatically, from a CLI (Command Line Interface), or automatically
- Consist of key-value data in binary format

## Kafka Producer

- Send event data into Kafka topics
- Integrate with client libraries in languages like Java, Python, Go, as well as many other languages

## Kafka Consumer

- Pull event data from one or more Kafka Topics
- Integrate with Kafka via a Client Library written in languages like Python, Java, Go, and more
- By default only consume data that was produced after the consumer first connected to the topic. Historical data will not be consumed by default.
