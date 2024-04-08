# Exercise Putting it All Together

## 1. Create an outline of a playbook for a web application that has frequent outages. Include items to check for:

- The application itself
- The underlying infrastructure
- Be sure to include any helpful commands or processes to assist in the problem diagnosing process.

```
PLAYBOOK

Tied to alert WEB_APP_OUTAGE

Summary:

The web application is frequently outage. There may be several reasons that lead to this behavior:

- Maybe the application often receiving too much traffic at peak hours, this leads to application overload which cause the application to crash.
- It might be the application itself that is unstable due to some misconfiguration in the code.

Summary of architecture:

This is a 3-tier web application with a FE, a BE and a RDS MySQL database span 1 public subnet and 2 private subnets.

Dashboard: CloudWatch (CPUUtilization, NetworkIn, NetworkOut, ...)
Log: CloudWatch Log

Remediation steps:

Based on the issue, run the corresponding Lambda function to restart the app or scale out the ASG in front of BE service.
- arn...
- arn...
```

## 2. The website is down, and you are the one to respond. Luckily, you used the playbook you recently created and were able to keep the outage to a minimum.

- Explain how having the playbook and using it could reduce the length of time it takes to correct an outage.
- Explain how potentially automating the steps in a playbook could reduce cost and toil.

```
By having a playbook, it will significantly reduce the time it takes to search for where to check the log files or error files, which will reduce the time it takes to diagnose the root cause of the incident. Also by having a playbook, it will be easier the remediate the system since it already contains guideline for specific situations.
```

## 3. If the outage lasted 30 minutes, how much would that cost the company? Hint: use $5900 per minute.

The outage lasts 30 minutes, and it cost around $5900 per minute, that would cost the company $5900 \* 30 = **$177000**.
