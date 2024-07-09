# Kafka Consumers

## Key Points

- `client.id` is an optional setting which is useful in debugging and resource limiting
- Poll for data to read data from Kafka
  - [poll](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.Consumer.poll)
  - [consume](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.Consumer.consume)`

## Consumer Offsets

- Kafka keeps track of what data a consumer has seen with offsets
- Kafka stores offsets in a private internal topic
- Most client libraries automatically send offsets to Kafka for you on a periodic basis
- You may [opt to commit offsets yourself](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.Consumer.commit), but it is not recommended unless there is a specific use-case.
- Offsets may be sent synchronously or asynchronously
- Committed offsets determine where the consumer will start up
  - If you want the consumer to start from the first known message, [set `auto.offset.reset` to `earliest`]
  - This will only work the first time you start your consumer. On subsequent restarts it will pick up wherever it left off
  - If you always want your consumer to start from the earliest known message, you must [manually assign your consumer to the start of the topic on boot](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.Consumer.assign)

## Consumer Groups

- All Kafka Consumers belong to a Consumer group
  - The `group.id` [parameter](https://docs.confluent.io/platform/current/installation/configuration/consumer-configs.html) is required and identifies the globally unique consumer group
  - Consumer groups consist of one or more consumers
- Consumer groups increase throughput and processing speed by allowing many consumers of topic data. However, only one consumer in the consumer group receives any given message.
- If your application needs to inspect every message in a topic, create a consumer group with a single member
- Adding or removing consumers causes Kafka to _rebalance_
  - During a rebalance, a broker _group coordinator_ identifies a consumer _group leader_
  - The consumer _group leader_ reassigns partitions to the current consumer group members
  - During a rebalance, messages may not be processed or consumed

## Topic Subscriptions

- You subscribe to a topic by specifying its name
  - If you wanted to subscribe to `com.udacity.lesson.views`, you would simply specify the full name as `”com.udacity.lesson.views”`
  - Make sure to set `allow.auto.create.topics` to false so that the topic isn’t created by the consumer if it does not yet exist
- One consumer can subscribe to multiple topics by using a regular expression
  - The format for the regular expression is slightly different. If you wanted to subscribe to `com.udacity.lesson.views.lesson1` and `com.udacity.lesson.views.lesson2` you would specify the topic name as `”^com.udacity.lesson.views.*”`
  - The topic name must be prefixed with `”^”` for the client to recognize that it is a regular expression, and not a specific topic name
  - Use [regexp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) to specify your regular expressions.
  - See the [confluent_kafka_python subscribe()](openshttps://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.Consumer.subscribe) documentation for more information

## Consumer Deserializers

- Remember to deserialize the data you are receiving from Kafka in an appropriate format
  - If the producer used JSON, you will need to deserialize the data using a JSON library
  - If the producer used bytes or string data, you may not have to do anything
- Consumer groups increase fault tolerance and resiliency by automatically redistributing partition assignments if one or more members of the consumer group fail.

## Retrieving Data from Kafka

- Most Kafka Consumers will have a “poll” loop which loops infinitely and ingests data from Kafka
- It is possible to use either [poll](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.Consumer.poll) or [consume](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.Consumer.consume), but `poll` is slightly more feature rich
- Make sure to call [close()](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.Consumer.close) on your consumer before exiting and to consume any remaining messages
- Failure to call `close` means the Kafka Broker has to recognize that the consumer has left the consumer group, which takes time and failed messages. Try to avoid this if you can.
