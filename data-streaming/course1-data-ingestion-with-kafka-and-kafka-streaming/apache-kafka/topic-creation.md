# Topic Creation

There are a number of ways to configure topics in Kafka and while topics may be created automatically, manual creation is a best practice. Helpful alternatives for topic creating include:

- Writing code in producer applications to see if a topic already exists, if it doesn't then the producer can configure and create the topic
- Using Bash scripts or an infrastructure provisioning tool to create topics
