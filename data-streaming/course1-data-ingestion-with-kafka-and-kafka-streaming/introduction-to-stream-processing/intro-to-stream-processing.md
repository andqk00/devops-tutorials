# Intro to Stream Processing

## Understanding Stream Processing

In computing, a _stream_ is typically thought of as a potentially unbounded sequence.

_Stream Processing_ is the act of performing continual calculations on a potentially endless and constantly evolving source of data.

Stream Processing applications perform calculations on _Data Streams_. Data Streams consist of a potentially endless stream of _immutable_ data.

Immutable data does not change -- once the data has been placed in the data stream it can never be updated. Another data entry can be placed in the stream that supersedes the previous data entry if necessary.

Data sent to data streams is typically _small, less than 1MB in size_.

The data throughput to data streams is highly variable. Some streams will receive thousands or tens of thousands of records per second, and some will receive one or two records per hour.

## Stream Processing

- Stream Processing acts on potentially endless and constantly evolving immutable data contained in data streams.
- Once data have been placed in a data stream, they cannot be modified. We must place a new record in the stream to override the existing data.
- Finally, data in data streams is typically less than 1MB in size and the data volume may vary from a few records an hour to thousands of requests per second.

## What is an Event?

- **Event** – an immutable fact regarding something that occurred within a system. It can not be changed, once created. Data records in the context of data streaming are events.
- In many SQL databases, it is uncommon to track the history of what values were used for a particular user in the past.
- **Message Queues** – typically communicate commands to perform an action
- **Invented Systems** – react to the facts that are indirectly communicated to them, for example, via user clicks
