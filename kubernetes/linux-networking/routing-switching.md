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

## Config Files

> Set value of file `/proc/sys/net/ipv4/ip_forward` to `1` to allow forward. However, to persist the change across reboots, update value of field `net.ipv4.ip_forward` of file `/etc/sysctl.cnf` to `1`.

> Update file `/etc/hosts` to set name for an IP. This name can then be used for several commands like `ping` or `ssh`.

> Update file `/etc/resolv.conf` with a value `nameserver 192.168.1.100` to specify the DNS server. In a network with multiple hosts, the DNS server is responsible to be a centralized server that stores all DNS values.

> In file `/etc/nsswitch.conf`, there is a line `hosts: files dns` which define the order of hostname files in which the host will read when trying to reach a server.

> Add a line to file `/etc/resolv.conf` that says `search <domain1> <domain2> ...` to automatically add each `<domain>` to the back of the DNS you are trying to reach and search all of the options.