# When To Use And Not to Use Terraform

From an SRE perspective, infrastructure as code is a win for the following reasons:

- Increases consistency
- Less tedious work
- Increases the time you can dedicate to more complex tasks
- Increases automation

Infrastructure as code increases in importance as your infrastructure **grows in size and complexity**. For instance:

- IaC allows the setup of 1000 EC2 VMs quickly and consistently
- IaC allows the setup of complex AWS database parameters consistently and quickly to each database environment

However, IaC also has some downfalls:

- For smaller environments, the added complexity and learning curve are not worth the time and effort. There is a steep learning curve for smaller teams.
- If the environment rarely changes, the overhead to get IaC up and running is not worth it since you will not be running the code very often.
