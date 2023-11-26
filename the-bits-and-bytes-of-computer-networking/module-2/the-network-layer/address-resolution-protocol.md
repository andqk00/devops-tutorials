# Address Resolution Protocol (ARP)

A protocol used to discover the hardware address of a node with a certain IP address.

Almost all network connected devices will retain a local ARP table.

### **ARP table**

A list of IP addresses and the MAC addresses associated with them.

Initially, if a device wants to know the MAC address correspond to an IP address, it first send a broadcast ARP message to the MAC broadcast address (all Fs). These messages are delivered to all computers on the local network. Then the device with the correspond IP address send its MAC address back to the sender device.

> ARP table entries generally expire after a short time to ensure changes in the network are accounted for.
