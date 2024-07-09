# Real-world Usage

First, think about defining a SQL Table in your favorite database, like MySQL or Postgres. When you declare your table, you always tell the database what columns it should have, and what the data types are for those columns.

- When defining a database table in this manner, you’re telling the database what data to expect, what shape it will take, and what the possible types of accepted values are for each column. This is a very common type of schema.

Outside of SQL databases, if you’ve ever worked with tools such as Hadoop, Hive, or Presto, you’ve likely seen Apache Avro used to describe data.

# Schemas and Containers

Schemas are also used in traditional backend development.

The container orchestration platform Kubernetes relies heavily on a tool called **gRPC** to facilitate communication between components. gRPC is a communication protocol built on Google’s Protocol Buffers schema definition language.

Using schemas has allowed Kubernetes to provide a fast and scalable platform that can easily integrate new functionality from third parties. Any third-party application can communicate with Kubernetes using these pre-defined schemas and expect the system to work properly.

Schemas play an important part in today’s software ecosystem.

- They can increase speed and clarity of expected data
- They help reduce mistakes and errors.
