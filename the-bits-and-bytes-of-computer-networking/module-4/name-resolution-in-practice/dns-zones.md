# DNS Zones

Allow for easier control over multiple levels of a domain.

Zones are configured through what are known as zone files.

### **Zone files**

Simple configuration files that declare all resource records for a particular zone.

A zone file has to contain an `SOA (Start of Authority)` resource record declaration.

### **Start of Authority (SOA)**

Declares the zone and the name of the name server that is authoritative for it.

### **NS records**

Indicate other name servers that might also be responsible for this zone.

### **Reverse lookup zone files**

These let DNS resolvers ask for an IP and get the FQDN associated with it returned.

These files are the same as zone files, except instead of A and Quad A records which resolve names to IPs, you'll find mostly pointer resource record declarations.

### **Pointer record (PTR)**

Resolves an IP to a name.
