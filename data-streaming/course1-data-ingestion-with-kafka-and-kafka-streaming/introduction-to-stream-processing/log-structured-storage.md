# Log-Structured Storage

One of the key innovations over the past decade in computing has been the emergence of log-structured storage as a primary means of storing data.

## Log-Structured Streaming

- Log-structured streams build upon the concept of append-only logs. One of the hallmarks of log-structured storage systems is that at their core they utilize append-only logs.
- Common characteristics of all log-structured storage systems are that they simply append data to log files on disk.
- These log files may store data indefinitely, for a specific time period, or until a specific size is reached.
- There are typically many log files on disk, and these log files are merged and compacted occasionally.
- When a log file is merged it means that two or more log files are joined together into one log file.
- When a log file is compacted it means that data from one or more files is deleted. Deletion is typically determined by the age of a record. The oldest records are removed, while the newest stay.
- Examples of real world log-structured data stores: Apache HBase, Apache Cassandra, Apache Kafka

While Apache Cassandra and HBase are not the focus of this course, both:

- are data stores that surface SQ-like interfaces
- are appropriate for working with massive datasets
- use append-only logs to store and coordinate data across nodes
- tend to be used in batch processing systems

On the other hand, Apache Kafka is a message queue system based on the concept of log-structured, append-only storage. It may appear similar to the others but is based on a different storage and scaling mechanism.
