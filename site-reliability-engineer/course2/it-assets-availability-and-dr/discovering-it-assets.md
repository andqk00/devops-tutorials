# Discovering IT Assets

Where do we get all these assets? We could start with existing documentation and work from there. Many businesses have existing resources such as:

- CMDB (configuration management database)
- Service catalog
- Diagrams

Existing documentation is a great starting point. There are some obvious infrastructure pieces that are easy to identify since they are mostly physical such as:

- Servers
- Storage arrays
- Load balancers
- Switches, etc.

But **even small pieces matter**! Think about this, let's say you have a cluster of web servers and you use an SSH key to manage those servers. Is the key an important asset? Yes! Without the key, you may not be able to manage those servers, so it's an important asset to identify!

Let's look at two examples:

### Example 1: monitoring stack running on Kubernetes using Grafana and Prometheus.

What are some assets here? Think beyond the hardware. Think high level as well and what function it may serve. In this case, these are some important assets from that example:

- Kubernetes
- Grafana
- Prometheus
- Monitoring environment

Don't forget, we must identify even the software.

### Example 2: Ubuntu web server running a custom image using custom application code.

Here are the assets:

- Virtual server
- Custom Ubuntu image
- Custom application code
- (SSH key)

Again, every piece is critical including the code and image.

We've talked about identifying assets, but what about applications? They are assets too! Specifically, what are **business-critical** applications? Any application that serves a critical function of the business!

How can we identify business-critical applications? A few questions can help us track them down:

- Conduct a survey or job shadow different business units
- Ask: does it make the business money?
- Ask: if it goes down, what functions stop?
- Ask: who or what units are impacted when it goes down?
