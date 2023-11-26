# TCP Socket States

### **Socket**

The instantiation of an end-point in a potential TCP connection.

### **Instantiation**

The actual implementation of something defined elsewhere.

> You can send traffic to any ports you want, but you're only going to get a response if a program has opened a socket on that court.

### **LISTEN**

A TCP socket is ready and listening for incoming connections.

You can see this on the server-side only.

### **SYN_SENT**

A synchroization request has been sent, but the connection hasn't been established yet.

You can see this on the client-side only.

### **SYN_RECEIVED**

A socket previously in a LISTEN state has received a synchronization request and sent a SYN/ACK back.

It haven't received the final ACK yet. You can see this on the server-side only.

### **ESTABLISHED**

The TCP connection is in working order and both sides are free to send each other data.

You can see this on both the client and server side.

### **FIN_WAIT**

A FIN has been sent, but the corresponding ACK from the other end hasn't been received yet.

You can see this on both the client and server side.

### **CLOSE_WAIT**

The connection has been closed at the TCP layer, but that the application that opened the socket hasn't released its hold on the socket yet.

You can see this on both the client and server side.

### **CLOSED**

The connection has been fully terminated and that no further communication is possible.

> Additionally, socket states and their names can vary from operating system to operating system. That's because they exist outside of the scope of the definition of TCP itself. TCP, as a protocol, is universal in how it's used since every device speaking the TCP protocol has to do this in the exact same way for communications to be successful.
