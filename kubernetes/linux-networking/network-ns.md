# Network Namespaces

## Command

```sh
# Create network ns
ip netns add <ns>

# List network ns
ip netns

# Exec in network ns - apply for multiple commands
ip netns exec <ns> ip link 
ip -n <ns> link

# Connect 2 namespaces
ip link add veth-red type veth peer name veth-blue
# Attach each interface to correspond ns
ip link set veth-red netns red
ip link set veth-blue netns blue
# Assign IP in that ns to interfaces
ip -n red addr add <ip> dev veth-red
ip -n blue addr add <ip> dev veth-blue
# Bring up the interfaces
ip -n red link set veth-red up
ip -n blue link set veth-blue up

# Setup virtual network (switch) to connect multiple networks
# Linux bridge
ip link add v-net-0 type bridge
# Bring the bridge up
ip link set dev v-net-0 up
# Create another cable to connect ns to switch
ip link add veth-red type veth peer name veth-red-br
# Attach interface
ip link set veth-red netns red
ip link set veth-red-br master v-net-0
# Assign IP in that ns to interfaces
ip -n red addr add <ip> dev veth-red
# Bring up the interfaces
ip -n red link set veth-red up
# Assign IP for network interface (switch) on the host
ip addr add <cidr> dev v-net-0

# Masquerade all requests from ns inside hosts
iptables -t nat -A POSTROUTING -s <cidr> -j MASQUERADE

# Allow external host to access network namespaces
iptables -t nat -A PREROUTING --dport 80 --to-destination <ns-ip>:80 -j DNAT

# IP table rules
iptables -nvL l -t nat
```