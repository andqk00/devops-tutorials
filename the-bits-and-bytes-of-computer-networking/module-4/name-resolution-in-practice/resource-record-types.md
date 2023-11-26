# Resource Record Types

DNS in practice, operates with a set of defined resource record types. These allow for different kinds of DNS resolutions to take place.

### **A record**

The most common resource record. Used to point a certain domain name at a certain IPv4 IP address.

In its most basic use, a single A record is configured for a single domain name, but a single domain name can have multiple A records too. This allows for a technique known as DNS round robin to be used to balance traffic across multiple IPs.

### **DNS round robin**

A concept that involves iterating over a list of items one by one in an orderly fashion.

The hope is that this ensures a fairly equal balance of each entry on the list that's selected.

For each computer requesting the domain, the list of IP addresses will get cycling so that it balance the traffic across IP addresses.

### **Quad A record**

Very similar to an A record, except that it returns an IPv6 address instead of IPv4.

### **CNAME record**

Used to redirect traffic from 1 domain name to another.

### **Mail exchange (MX)**

This resource record is used in order to deliver email to the correct server.

### **Service record (SRV)**

Used to define the location of various specific services.

### **Text record (TXT)**

Originally intended to be used only for associating some descriptive text with a domain name for human consumption.

**Since the text record has a field that's entirely free form, clever engineers have figured it out ways to use it to communicate data not originally intended to be communicated by a system like DNS.**

**This text record is often used to communicate configuration preferences about network services that you've entrusted other organizations to handle for your domain.**
