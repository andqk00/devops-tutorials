# Defining Good SLOs

> **Bad SLOs** are generic and do not indicate if an application is functioning properly or performing at peak levels.

> **Good SLOs** have specific time frames and indicate a specific user experience indicator, such as responding on average within 50ms.

Let's look at a good and bad SLO comparison again:

- **Bad SLO**: Memory is below 80% utilization on servers during business hours
- **Good SLO**: Average memory utilization over a **5 minute period** is below 80% for **web application processes**

Notice 2 key differences. There is a specific time frame for the good SLO of a 5 minute period. This allows us to actually target and measure a specific area. There is also a reference to a specific web application process. This helps target the web server and not just a generic process on the server.