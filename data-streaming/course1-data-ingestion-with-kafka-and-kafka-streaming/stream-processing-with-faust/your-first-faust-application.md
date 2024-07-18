# Your First Faust Application

Reviewing the Hello Faust application:

1. We instantiate the Faust application. Every Faust application has a name and a Kafka broker connection.
2. We tell the app which topic we’re interested in, as well as the key and value types expected for this particular Kafka topic.
3. We create an async function to be called when an event is received from our Kafka topic. This function is decorated with an app.agent which tells Faust to route events from this topic to this function.
4. The inner for loop is iterating on an infinite stream of purchase events, coming through the purchases stream. Notice the async keyword indicating that we’re using asyncio here. This keyword isnt optional on either the function or for loop.

## Further Optional Research - Exploring Faust Functionality in More Depth

- [See the Faust documentation for in-depth documentation of how Faust works](https://faust.readthedocs.io/en/latest/introduction.html)
- Every Faust application has an [`App` which instantiates the top-level Faust application](https://faust.readthedocs.io/en/latest/userguide/application.html#what-is-an-application)
- The application must be assigned a [`topic` to subscribe to](https://faust.readthedocs.io/en/latest/userguide/application.html#app-topic-create-a-topic-description)
- An output [`Table`](https://faust.readthedocs.io/en/latest/userguide/tables.html#id1) or stream receives the output of the processing
- An asynchronous function is decorated with an [`agent`](https://faust.readthedocs.io/en/latest/introduction.html#id6) which register the function as a callback for the application when data is received
