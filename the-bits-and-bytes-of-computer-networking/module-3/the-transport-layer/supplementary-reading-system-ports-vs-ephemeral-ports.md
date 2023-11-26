# Supplemental Reading for System Ports versus Ephemeral Ports

### Three categories of ports

Since a 16-bit number identifies ports, there can be 65,535 of them. Given the number of ports available, they have been divided into three categories by the `Internet Assigned Numbers Authority (IANA)`: **System Ports**, **User Ports**, and **Ephemeral Ports**.

- **System Ports** are identified as ports 1 through 1023. System ports are reserved for common applications like FTP (port 21) and Telnet over TLS/SSL (port 992). Many still are not assigned. Note: Modern operating systems do not use system ports for outbound traffic.

- **User Ports** are identified as ports 1024 through 49151. Vendors register user ports for their specific server applications. The IANA has officially registered some but not all of them.

- **Ephemeral Ports (Dynamic or Private Ports)** are identified as ports 49152 through 65535. Ephemeral ports are used as temporary ports for private transfers. Only clients use ephemeral ports.

### **Port security**

Ports allow services to send data to your computer but can also send malware into a client program. Malicious actors might also use port scanning to search for open and unsecured ports or to find weak points in your network security. To protect your network, you should use a firewall to secure your ports and only open sockets as needed.
