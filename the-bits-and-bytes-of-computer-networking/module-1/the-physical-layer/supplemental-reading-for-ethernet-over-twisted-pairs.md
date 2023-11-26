# Supplemental Reading for Ethernet Over Twisted Pair Technologies

Twisted pair Ethernet cable is the most commonly used Ethernet cable in business and home networks. Often delivered through a coaxial cable / fiber-optic cable from an ISP. This connection is fed into a gateway modem located inside the building or home (for home internet customers, this hardware is often provided by the ISP). The modem then passes the internet connection through a twisted pair Ethernet cable to a router or a single computer. The router uses twisted pair Ethernet cables to distribute wired network connections internally to the business or home. Some routers also have the capability to provide wireless network connections to the internal network. In addition, this also supply telephone and television services.

### **Twisted pair cables**

Originally, telephone and early data cables included two copper wires, one for transmitting data and one for receiving data. The two wires laid parallel to one another. The wire pair will then be twisted together in order to resolve some issues like electromagnetic interference (EMI), radio frequency interference (RFI), and crosstalk between the two copper wires.

Twisted pair Ethernet cables are commonly used in LANs because:

- They offer multiple levels of protection against EMI, RFI, and crosstalk.
- The lower levels of interference protection provide low-cost options, which are generally more accessible to home users and small businesses.
- The cables are thin, light weight, and malleable enough to install and move easily.
- The transmission range of the cable is suitable for short distance connections inside of buildings and homes.
- The cable’s frequency range is able to transmit both data and telephone/voice communications.

### **UTP, STP, and FTP Ethernet cables**

Twisted pair Ethernet cable uses four pairs of color-coded copper wires. Each colored pair, one solid and one striped, are twisted together. There are multiple types of twisted pair Ethernet cables available on the market. These types fall into three main categories:

- **Unshielded twisted pair (UTP)** - The most common and least expensive type of Ethernet cable found in business and home networks. UTP cables offer very basic protection against EMI, RFI, and crosstalk interference.

- **Shielded twisted pair (STP)** - Used in environments where electromagnetic interference (EMI), radio frequency interference (RFI), and crosstalk with nearby cables have been identified as a problem for network communications. An STP cable uses a braided aluminum and/or copper shielding to encase the four twisted pairs underneath the outer jacket.

- **Foiled twisted pair (FTP)** - Also used in environments where EMI, RFI, and crosstalk are a problem. An FTP cable uses a thin foil shield that wraps around the bundle of twisted pair wires underneath the outer jacket.

The STP and FTP labels are often used interchangeably to reference shielded and/or foiled cables. STP and FTP braided and foiled shields can also exist together in the same cable for extra protection against interference. It is important to check the manufacturer’s description of the Ethernet cable to determine which interference-reducing method was used in the manufacturing of the cable. UTP, STP, and FTP Ethernet cables can also be manufactured to have braided and/or foil shields around each of the four twisted pairs. This configuration further reduces crosstalk amongst the twisted pairs, but is the most expensive of the Ethernet cable options. A shielded with foiled twisted pair (SF/FTP) would most likely be used in an industrial environment where EMI and/or RFI is much higher than normal.

### **Straight-through cable**

Straight-through cables are also known as patch cables. They are the primary type of Ethernet cable used in computer networks. Straight-through cables normally connect computers and routers to hubs and Ethernet switches. Ethernet cable can also connect servers to Ethernet switches.

Straight-through cables can be identified by comparing both ends of the cable with one another. The cable is a straight-through cable if the color and stripe order of the twisted pairs are in the same position on both ends of the cable. In a typical straight-through cable set-up, an orange-striped wire that appears in pin position 1 should also appear at that same position on the other end. This one-to-one pattern is continued for each color in pin positions 2-8. Ethernet cables that use 100Base-T standards (common for home networks) do not use blue and brown cables. Networks using gigabit Ethernet have the option to use blue and brown cables for Power over Ethernet (PoE).

**Straight-through cable key:**

- Computers and routers use:
- Pins 1 & 2 - Orange wires for sending data
- Pins 3 & 6 - Green wires for receiving data
- Hubs and switches use:
  - Pins 1 & 2 - Green wires for sending data
  - Pins 3 & 6 - Orange wires for receiving data

### **Crossover cable**

Crossover cables may still be in use in older network environments. This section provides information for working with crossover Ethernet cable for older Enterprise network devices. Note that most new Enterprise devices have the ability to detect Ethernet connection types and select the correct wires for sending and receiving data using Auto Medium Dependent Interface Crossover (Auto-MDI/MDIX) technology. The Auto-MDI/MDIX ports replace the crossover cable’s function for connecting two devices that use the same sending and receiving wires for data communications.

Crossover cables are used to connect two computing devices directly to one another. As an IT Support specialist, you might use a short crossover cable to connect an IT administrator laptop directly to an Enterprise machine (e.g., server, switch, router, hub, etc.). This type of connection is normally used to update, repair, and perform other administrative tasks on the Enterprise machine. A crossover cable should be connected between the Ethernet port/Network Interface Card (NIC) on the IT administrative system and the management port of the Enterprise machine. This connection is then used to access the operating system and/or the management interface of the Enterprise machine. Additionally, crossover cables can connect two switches, two hubs, or a switch to a hub, as well as two routers, two PCs, or a router to a PC.

Like straight-through cables, crossover cables can also be identified by comparing both ends of the cable to one another. Crossover cable ends will have different patterns in the color order of the twisted pairs. The crossover cable key below describes a typical setup for a T-568-A. If the green wires appear in pin positions 1 and 2 on one side of the cable, on the opposite end of the cable, the green wires will appear in the pin positions 3 and 6. The orange wires will appear in positions 3 and 6 at one end of the cable, crossing over to the 1 and 2 positions at the opposite end.

For the T-568-B scheme, if you see orange wires start at pin positions 3 and 6, they should cross over to pin positions 1 and 2 at the opposite end of the cable. Green wires should start at pin positions 1 and 2, crossing over to 3 and 6 at the opposite end. This wiring crossover is needed to connect two computers that transmit and receive data on the same wires. Blue and brown wires do not cross over to different positions in this set-up.

Straight-through cables use the T568B wiring scheme, while crossover cables use both schemes.

**Crossover cable key:**

- Endpoint 1 of the Ethernet cable:
- Pins 1 & 2 - Green wires for sending data
- Pins 3 & 6 - Orange wires for receiving data
- Endpoint 2 of the Ethernet cable:
  - Pins 1 & 2 - Orange wires for sending data
  - Pins 3 & 6 - Green wires for receiving data