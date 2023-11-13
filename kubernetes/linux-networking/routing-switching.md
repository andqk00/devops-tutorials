# Switching Routing

## Commands

```sh
# Check the interfaces of host computer
ip link

# Connect host to switch
ip addr add <cidr> dev eth0

# Display kernel's routing table
route

# Configure gateway on 1 system to reach systems on another network
ip route add <system-cidr> via <ip>

# Add default gateway
ip route add default via <ip>
```
