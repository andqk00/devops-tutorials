# Serialization and Deserialization in Faust

## Serialization and Deserialization

Deserializing and serializing data into native Python objects can make working with streaming data simpler and easier to test. In the following section you will see how to map your internal Python data structures to incoming and outgoing data with Faust.

## Python Dataclasses

- A `dataclass` is a special type of Class in which instances are meant to represent data, but not contain mutating functions.
- Python `dataclass` objects can be [marked as `frozen`](https://docs.python.org/3/library/dataclasses.html#frozen-instances), which makes them immutable - Nothing in Python is truly immutable, but this attribute gets you about as close as you can get
  - `dataclass` objects require type annotations on fields and will enforce those constraints on creation. This helps ensure you’re always working with data in the expected format, reducing and preventing errors.
  - Can be paired with the [`asdict` function](https://docs.python.org/3/library/dataclasses.html#dataclasses.asdict) to quickly transform dataclasses into dictionaries
  - [New in Python 3.7](https://docs.python.org/3/whatsnew/3.7.html)
  - Default to using `dataclass` to work with data coming into and out of your Faust applications unless you have a good reason not to

## Faust Deserialization

Topic deserialization in Faust is a simple and painless process. Similar to how you might specify a schema for key and value to `confluent_kafka`, with Faust you can provide key and value types. These value types may be primitives such as `int` or `str`, or complex types represented as objects.

### Key Points

- All data model classes must inherit from the [`faust.Record` class](https://faust.readthedocs.io/en/latest/userguide/models.html#records) if you wish to use them with a Faust topic.
- It is a good idea to specify the [`serializer` type on your](https://faust.readthedocs.io/en/latest/userguide/models.html#serialization-deserialization) so that Faust will deserialize data in this format by default.
- It is a good practice to set [`validation=True` on your data models](https://faust.readthedocs.io/en/latest/userguide/models.html#model-validation). When set to true, Faust will enforce that the data being deserialized from Kafka matches the expected type. - E.g., if we expect a `str` for a field, but receive an `int`, Faust will raise an error.
  - [Use Faust `codecs` to build custom serialization and deserialization](https://faust.readthedocs.io/en/latest/userguide/models.html#codec-registry)
