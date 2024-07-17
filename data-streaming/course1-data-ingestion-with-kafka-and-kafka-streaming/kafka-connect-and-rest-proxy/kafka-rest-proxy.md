# Kafka REST Proxy

Some applications, for legacy reasons or otherwise, will not be able to integrate a Kafka client directly. Kafka REST Proxy can be used to send and receive data to Kafka topics in these scenarios using only HTTP.

## REST Proxy Architecture

Like the rest of the Kafka Ecosystem tools, **REST Proxy** is written in Scala and Java and runs on the JVM. Because of this choice, REST Proxy can run just about anywhere.

- REST Proxy is a simple HTTP web server and can be deployed to just one instance, or a cluster of many instances
- REST proxy transforms structured JSON data from an application Kafka’s binary format and it can translate data from Kafka into a JSON payload for an application
- REST proxy can optionally be made aware of Schema Registry so that it can help you manage your Avro schemas.

REST proxy is most useful when you really can’t use a Kafka client directly. If using a Kafka client is possible, it is strongly preferable to take that route.

Kafka clients not only help abstract some of the interaction with Kafka in a more efficient way than REST proxy, but they also have substantial speed and payload size benefits as well.

## Using REST Proxy

In this section, you will see first-hand how to produce and consume data with the Kafka REST Proxy. Though REST Proxy is conceptually similar to traditional Kafka clients, we will highlight some of the important differences and considerations.

### REST Proxy Producer

- [`POST` data to `/topics/<topic_name>` to produce data](<https://docs.confluent.io/platform/current/kafka-rest/api.html#post--topics-(string-topic_name)>)
- The Kafka data may be POSTed in Binary, JSON, or Avro
- When sending Avro data you must always include the schema data as a string
- [_Always check your Content-Type header to ensure that it is correctly configured_](https://docs.confluent.io/platform/current/kafka-rest/api.html#content-types)
  - Content-Type is in the format `application/vnd.kafka[.embedded_format].[api_version]+[serialization_format]`
  - `embedded_format` is how the data destined for Kafka is formatted. Must be one of `binary`, `json`, or `avro`
  - `api_version` is the API version for REST Proxy -- this should always be `v2` as of this writing
  - `serialization_format` has nothing to do with your Kafka data, this is how the actual data being sent to REST proxy is serialized. Only `json` is supported for now -- so always set this to `json`!
- When using REST Proxy, always start by ensuring that the `Content-Type` is correctly set before running your code. A misconfigured `Content-Type` can lead to confusing and hard-to-debug errors.

## Consuming Data with REST Proxy

- [`POST` to `/consumers/<group_name>` to create a consumer group](<https://docs.confluent.io/platform/current/kafka-rest/api.html#post--consumers-(string-group_name)>)
- [`POST` to `/consumers/<group_name>/instances/<instance_id>/subscriptions` to create a subscription](<https://docs.confluent.io/platform/current/kafka-rest/api.html#post--consumers-(string-group_name)-instances-(string-instance)-subscription>)
- [`GET` from `/consumers/<group_name>/instances/<instance_id>/records` to retrieve records](<https://docs.confluent.io/platform/current/kafka-rest/api.html#get--consumers-(string-group_name)-instances-(string-instance)-records>)
  - [_Always check your Accept header to ensure that it is correctly configured_](https://docs.confluent.io/platform/current/kafka-rest/api.html#content-types)
    - Content-Type is in the format `application/vnd.kafka[.embedded_format].[api_version]+[serialization_format]`
    - `embedded_format` is how the data requested from Kafka is formatted. Must be one of `binary`, `json`, or `avro`
    - `api_version` is the API version for REST Proxy -- this should always be `v2` as of writing
    - `serialization_format` has nothing to do with your Kafka data, this is how the actual data being received from REST proxy is serialized. Only `json` is supported for now -- so always set this to `json`!
- [`DELETE` to `/consumers/<group_name>/instances/<instance_id>/subscriptions` to unsubscribe a coinsumer](<https://docs.confluent.io/platform/current/kafka-rest/api.html#delete--consumers-(string-group_name)-instances-(string-instance)-subscription>)
