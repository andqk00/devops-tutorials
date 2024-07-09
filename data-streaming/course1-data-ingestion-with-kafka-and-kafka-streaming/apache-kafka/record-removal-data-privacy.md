# Record Removal; Data Privacy

## Removing Records and Data Privacy

Removing data from Kafka requires special planning and consideration since it utilizes an append-only log. In this section, you will learn about strategies and privacy regulations related to removing Kafka records.

This is a serious issue in a world where privacy regulations are increasingly giving consumers the right to be forgotten. Regulations like the EU’s GDPR and the California Consumer Privacy Act, or CCPA, grant citizens of these regions the right to request that their data be removed from storage.

## Message Compaction

Kafka supports message expiration:

- Kafka can expire messages based on time, topic size, or both

However, some use cases disallow the use of message expiration to manage user data. When this occurs, use **log compaction** instead of log expiration to manage a user’s personal data.

- With a compacted topic, you can continue to publish updates to a particular message as long as the keys match.
- A message with a matching key and a null value tells the Kafka broker that it should delete the key on the next compaction, effectively deleting the message.
- There are log compaction timing settings on the topic.

One of the major problems with this approach, however, is that user data may be spread through many topics, and not always keyed on the user ID. So, unfortunately, this strategy is typically not enough.

## Per-User Key Encryption

**Encrypted User Keys** – create a topic that maps a user id to an encryption key

- Used to encrypt any data related to a user before putting it into any other Kafka topic
- Vastly reduces the management overhead of deleting user data

To delete the user, simply compact and delete their encryption key from the encrypted user key topic. Once the key is gone, it is effectively impossible for any application in the system to decrypt the user’s data ever again.
