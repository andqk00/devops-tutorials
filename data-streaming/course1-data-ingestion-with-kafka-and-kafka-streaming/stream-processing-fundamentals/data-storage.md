# Data Storage

Table operations are stateful, meaning we must store the intermediate results of combining multiple events to represent the latest point-in-time value for a given key. Therefore, table operations require some form of storage. Options range from using in-memory storage, to dedicated databases such as RocksDB. In this section, we’ll review the options that are available.

Whether you are using KSQL, Faust, Kafka Streams, or Flink, all of these stream processing frameworks use Kafka topics to store the internal state of the stream processing applications they are running.

- Stream processing frameworks create topics on Kafka to track all of the changes occurring in a stream, so that state could be easily recreated if needed.
- These stream processing frameworks use Kafka’s log compaction to ensure that these topics do not grow unbounded and it helps keep the size of these topics smaller as well, which can aid in startup time.

## RocksDB

While storing data in Kafka is great for recovery, clients still need a datastore to utilize while running on the various nodes.

- By default, most streaming frameworks will simply use an in-memory store to hold state.

While this is fast, and the usage of the compacted Kafka topics provides fault tolerance, there are better strategies to aid boot times on our nodes than to use in-memory storage.

**RocksDB** is a highly-optimized local state store that was built at Facebook for situations just like this.

- RocksDB can run on all application nodes and store state for that particular stream processing application
- This local state store can dramatically speed up recovery times, especially for high throughput streams
- RocksDB is used for quick start times between reboots on the same node.

It's worth noting that RocksDB is used by all of the major stream processing frameworks as an option to store state. KSQL, Kafka Streams, Faust, and Flink all use RocksDB as an option.
