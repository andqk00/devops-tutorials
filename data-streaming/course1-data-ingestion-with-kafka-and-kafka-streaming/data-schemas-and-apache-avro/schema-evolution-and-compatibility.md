# Schema Evolution and Compatibility

Schemas change over time with new requirements. This process of schema change is known as _Schema Evolution_.

In this section, you will see how Avro and Schema Registry can aid in the process of Schema Evolution.

We’ll also discuss in this series of concepts how evolving schemas can be forward or backward compatible with previous versions.

## Understanding Schema Evolution

**Schema evolution** – the process of changing the data schema for a given dataset.

In other words, it means that a Kafka producer has modified the shape of the data, as well as the data schema, that it intends to send.

In practice, evolving a schema simply means updating the Avro definition and resubmitting the schema to schema registry with some compatibility information.

## Schema Compatibility

- The process of schema change is known as Schema Evolution
- Schema Evolution is caused by a modification to an existing data schema
  - Adding or removing a field
  - Making a field optional
  - Changing a field type
- Schema Registry can track schema compatibility between schemas
  - Compatibility is used to determine whether or not a particular schema version is usable by a data consumer
  - Consumers may opt to use this compatibility information to preemptively refuse to process data that is incompatible with its current configuration
  - Schema Registry supports [four categories of compatibility](https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html)
  - Backward / Backward Transitive
  - Forward / Forward Transitive
  - Full / Full Transitive
  - None
- Managing compatibility requires both producer and consumer code to determine the compatibility of schema changes and send those updates to Schema Registry

## Backward Compatibility

- [Backward compatibility](https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html#backward-compatibility) means that consumer code developed against the most recent version of an Avro Schema can use data using the prior version of a schema without modification.
  - The deletion of a field or the addition of a new optional field is backward compatible changes.
  - Update consumers before updating producers to ensure that consumers can handle the new data type
- The `BACKWARD` compatibility type indicates compatibility with the current version (`N`) and the immediately prior version (`N-1`)
  - Unless you specify otherwise, Schema Registry always assumes that changes are `BACKWARD` compatible
- The `BACKWARD_TRANSITIVE` compatibility type indicates compatibility with _all_ prior versions (`1` → `N`)

## Forward Compatibility

- [Forward compatibility](https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html#forward-compatibility) means that consumer code developed against the previous version of an Avro Schema can consume data using the newest version of a schema without modification
  - The deletion of an optional field or the addition of a new field is forward compatible changes
  - Producers need to be updated before consumers
- The `FORWARD` compatibility type indicates that data produced with the latest schema (`N`) is usable by consumers using the previous schema version (`N-1`)
- The `BACKWARD_TRANSITIVE` compatibility type indicates that data produced with the latest schema (`N`) is usable by all consumers using any previous schema version (`1` → `N-1`)

## Full Compatibility

- [Full compatibility](https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html#full-compatibility) means that consumers developed against the latest schema can consume data using the previous schema, and that consumers developed against the previous schema can consume data from the latest schema as well. In other words, full compatibility means that a schema change is both forward and backward compatible.
  - Changing the default value for a field is an example of a full compatible change.
  - The order in which producers or consumers are updated does not matter.
- The `FULL` compatibility type indicates that data produced is both forward and backward compatible with the current (`N`) and previous (`N-1`) schema.
- The `FULL_TRANSITIVE` compatibility type indicates that data produced is both forward and backward compatible with the current (`N`) and all previous (`1` → `N-1`) schemas.

## None Compatibility

- [No compatibility](https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html#no-compatibility-checking) disables compatibility checking by Schema Registry.
  - In this mode, Schema Registry simply becomes a schema repository.
- Use of `NONE` compatibility is not recommended.
- Schemas will sometimes need to undergo a change that is neither forward nor backward compatible.
  - **Best practice is to create a new topic with the new schema and update consumers to use that new topic.**
  - Managing multiple incompatible schemas within the same topic leads to runtime errors and code that is difficult to maintain.
