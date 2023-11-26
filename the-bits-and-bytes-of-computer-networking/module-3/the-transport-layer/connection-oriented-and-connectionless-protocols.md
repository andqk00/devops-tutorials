# Connection-oriented and Connectionless Protocols

### **Connection-oriented protocol**

Establishes a connection, and uses this to ensure that all data has been properly transmitted.

> At the IP or Ethernet level, if a checksum doesn't compute all of that data is just discarded, it's up to TCP to determine when to resend this data.

### **Connectionless protocol**

Most common: `UDP (User Datagram Protocol)`

> By getting rid of all the overhead of TCP, you might actually be able to send higher quality video with UDP. That's because you'll be saving more of the available bandwidth for actual data transfer instead of the overhead of establishing connections and acknowledging delivered data segments.
