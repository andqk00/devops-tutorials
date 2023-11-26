# Unicast, Multicast and Broadcast

A `unicast` transmission is always meant for just 1 receiving address. <br>
A `multicast` transmission is meant for addresses depending on criteria other than their own hardware MAC address. <br>
A `broadcast` transmission is sent to every single device on a LAN.

At the Ethernet level, this is done by looking at a special bit in the destination MAC address.

- If the least significant bit in the first octet is set to `0`, it means that Ethernet frame is intended for `only the destination address`.
- If the least significant bit in the first octet is set to `1`, it means that Ethernet frame is intended for `destination addresses`.

Ethernet send data to all devices on the collision domain, but only actually received and processed by intended destination based on address.

> Network interfaces can be configured to accept lists of configured multicast addresses.

> For broadcast transmission, a special destination known as broadcast address is being used. Its format is: `FF:FF:FF:FF:FF:FF`
