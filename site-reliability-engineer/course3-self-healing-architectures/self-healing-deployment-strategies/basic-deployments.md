# Basic Deployments

A basic deployment is when all active services are brought down together and replaced with the new deployment version. This strategy is a quick way of getting the new version of an application deployed in the quickest way without regard for errors. It is typically used in environments where errors are acceptable.

In the case of a failed deployment, it's up to the product manager to determine do we continue to push forward and deploy a hotfix to resolve the issue? Or do we **roll back** to version 1 which was the last stable version?

A basic deployment is

- Simple
- Fast
- Cheap, in the sense that it does not require an abundance of automation and engineering time to implement.

These types of deployments are also

- High risk
- Destructive and can cause outages for an application, impacting the user experience
- It is not a best practice in production environments
- Rolling back can be a lengthy complicated process

This type of deployment is typically used

- When the application being deployed is not critical to the functionality of the business, like an internal tool
- When deploying to a lower environment like development, testing, or staging environment
- When the application is not in use by users
- During off-hours when your business can support a maintenance window in case of a failure.
