# Apache Avro

## Intro to Apache Avro

Apache Avro is a widely used data schema system in the data engineering space, and especially in the Apache Kafka ecosystem. In this section, we’ll review key concepts as they relate to Avro and Stream Processing.

## What is Apache Avro?

**Apache Avro** is a data serialization system that uses a binary data format.

- when data in an application is shared in the Avro format, it is compressed into a binary format over the network
- this binary format improves speed over the network and can help reduce storage overhead
- this binary formatted data includes the application data in the Avro schema format and the schema definition.

When clients receive data from an application in Avro format, not only do they receive the data, but they also receive the **Avro instructions, or schema**, for how to deserialize the data from binary into their own application data model representation.

## How Avro Schemas are Defined

- Apache Avro records are defined in JSON.
- Avro records include a required name, such as "user"
- Avro records must include a type defined as `record`
- Avro records may optionally include a namespace, such as "com.udacity"
- Avro records are required to include an array of fields that define the names of the expected fields and their associated type. Such as `"fields": [{"name": "age", "type": "int"}]`
- Avro can support optional fields by specifying the field type as either null or some other type. Such as `"fields": [{"name": "age", "type": [“null”, "int"]}]`
- Avro records are made up of complex and primitive types
  - Complex types are other records, arrays, maps, and others
- Please reference [the Avro documentation for full documentation](https://avro.apache.org/docs/1.8.2/spec.html#schemas) and additional examples
- Here is what a stock ticker price change schema might look like:

```
{
    “type”: “record”,
    “name”: “stock.price_change”,
    “namespace”: “com.udacity”,
    “fields”: [
        {“name”: “ticker”, “type”: “string”},
        {“name”: “prev_price”, “type”: “int”},
        {“name”: “price”, “type”: “int”},
        {“name”: “cause”, “type”: [“null”, “string”]}
    ]
}
```

## Data Types

- Full documentation is available on the [Avro website](https://avro.apache.org/docs/1.8.2/spec.html#schema_primitive)
- [Primitive Types](https://avro.apache.org/docs/1.8.2/spec.html#schema_primitive) should be familiar, as they closely mirror the built-in types for many programming languages.
  - `null`
  - `boolean`
  - `int`
  - `long`
  - `float`
  - `double`
  - `bytes`
  - `string`
- [Complex Types](https://avro.apache.org/docs/1.8.2/spec.html#schema_complex) allow nesting and advanced functionality.
  - `records`
  - `enums`
  - `maps`
  - `arrays`
  - `unions`
  - `fixed`
