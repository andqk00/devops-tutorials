# Analyzing Capacity Requirements

When analyzing system capacity requirements, you should consider the following factors:

- **Redundancy**
  - Redundancy can be done at several levels. For example,
    - Multiple instances in a data center.
    - Multiple cloud environments spread out all over the world.
  - Benefits of having redundancy:
    - Increases reliability by having multiple instances handling the same function.
    - Improves performance by allowing the workload to be shared among multiple instances.
    - Increases the responsiveness of the system by using server assets closer to the user who has requested it.
    - More flexibility in responding to changes in capacity needs.
- **Resource needs**
  - Perform load testing to determine needs.
  - Start load tests as soon as the system is in a functioning state.
  - Generalize server function to estimate potential needs.
- **User expectations**
  - Consider user expectations; different applications need different levels of responsiveness.
  - It is important to meet your users’ expectations while still being realistic about the level of service your system can handle.
