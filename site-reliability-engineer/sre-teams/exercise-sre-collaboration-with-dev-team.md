# Exercise SRE Collaboration with Development Teams

## 1. Have a look at the Software Release Process diagram created by the development manager. The development manager's message is, "if a change passes QA testing, then it ought to be released." Apply your knowledge about error budgets and provide a compelling explanation as to why this is always not true.

QA Testing find and fix errors, bugs, confirm logical flows and ensure the applications meet customer's requirements. Since application uptime depends on multiple factors, other than just application's bugs and errors, we cannot guarantee that if the change pass QA testing, it will not cause the application to outage.

## 2. Given that the application uses multiple systems (databases, cloud infrastructure), it may not always be the application code at fault when the error budget is consumed. Define ways to keep the application's releases stable.

- Perform proper software testing before releasing any changes. This include unit, integration and system testing.
- Release just small changes frequently so that we can get more feedback from users as well as isolate the change which cause the outage.
