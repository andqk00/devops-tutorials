# Hubs and Switches

## <u>I. Hub</u>

A physical layer device that allows for connections from many computers at once. All devices connect to the hub will end up talking to all other devices at the same time (Up to each system connected to determine if the incoming data was meant for them or not).

### **Collision domain**

A network segment where only 1 device can communicate at a time. <br>
If multiple systems try sending data at the same time, the electrical pulses sent across the cable can interfere with each other. <br>

=> Cause systems to wait for a quiet period before sending data again. <br>
=> **Primary reason why hub is rare today.**

## <u>II. Switch</u>

Similar to hub, many devices can connect to it. `The different is that Hub is Layer-1, while Switch is Layer-2.` <br>
=> **Switch can inspect the contents of the Ethernet protocol data being sent around the network, determint which system to receive it and only send to that system (Eliminate completely collision domain).**
