# Data Streaming with/without Schemas

## Data Streaming without Schemas

When data streaming without a schema, 3rd party/partner changes to data models can crash your system. Fixing this issue can be costly both in terms of time and money.

Defining a schema:

- creates a more formalized agreement as to what the data should look like
- allows the schema to update when the data changes, helping applications stay resilient to the update.

Some schema definition languages can even indicate backward, forward, or fully compatible changes.

## Data Streaming with Schemas

- Streaming applications are highly dependent on data schemas
- Schemas are widely used in data streaming applications to codify the data being produced and received
- Schemas allow for data producers to evolve largely independently of their data consumers -- namely, streaming applications
- Schemas provide the tool that stream processing applications need to evolve independently of their upstream producers
- Schemas can help shield data consumers from unexpected changes in the system
- Some schema systems even provide detailed information about data compatibility to help applications understand what they can or cannot do with a given piece of data, as it arrives
