# Streams and Tables

In this section, you will learn to distinguish between _streams_ and _tables_ in stream processing frameworks. You will also learn when to apply each type of approach.

One of the most confusing terminology issues to stream processing newcomers is understanding the difference between a **streaming processing “stream”** and a **stream processing “table.”**

- Table implies a state and aggregation of some kind
- Stream is simply an immutable series of ordered events.

## Streams

Streams contain all events in a topic, immutable, and in order. As new events occur, they are simply appended to the end of the stream.

The output of many stream processing applications are themselves streams. Common examples of scenarios in which a stream processing application might emit another stream are:

- filtering
- remapping

Streams are used in many stream processing workflows, such as data enrichment.

## Tables

Tables are the result of aggregation operations in stream processing applications. They are a roll-up, point-in-time view of data.

This point-in-time analysis represents the equivalent of a snapshot in time. Unlike streams, which are ordered, boundless, and immutable, tables are:

- bounded
- mutable
- not necessarily ordered!

Tables are how we most often derive insights from the influx of data from our streams and topics. As new data arrives into our aggregate calculations, our stream processing applications update an aggregated view of that data in time.

## Comparing Streams and Tables

Streams and tables are not opposing concepts. In practice, the differentiation of a stream from a table in a stream processing application serves as a description of the type of data that is produced. Applications that are performing aggregations across incoming data are creating tables. Applications that are transforming incoming data into an unending sequence of events are streams.

[Of Streams and Tables in Kafka and Stream Processing, Part 1](https://www.michael-noll.com/blog/2018/04/05/of-stream-and-tables-in-kafka-and-stream-processing-part1/)
