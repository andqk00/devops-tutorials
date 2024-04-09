# Performing a Launch Review

As we continue along with our reliability reviews, we will now discuss how to perform a launch review. Launch reviews are an extensive look at the entire system as a whole.

## Reviewing Processes

In the first part of this section, we cover how to review the processes necessary for launching a system. Some examples of processes include:

- **Version control**
    - Used to track code changes over time.
    - Ensure proper safeguards are in place.
    - Establish a procedure for committing changes.
    - You should have this process well-documented for future reference.
- **New release**
    - Nail down the process and schedule for releases.
    - Automate where possible, making sure the automation is working correctly.
    - Document all the processes for future engineers.
- **Testing**
    - Define the testing suite used. Include both functional and non-functional tests.
    - Identify any areas missed by a testing suite.
    - Define the triage process for remediating failed tests.
    - Automate the test process.
- **Build process**
    - **Schedule**: Define a schedule for building or packing the application.
    - **Integration**: Determine how the build process fits in with other workflows, such as deployment, testing, and version control.
    - **Completed builds**: Determine which application builds to keep.

These processes should already be mostly in place by the time you get to launch, so this is a chance to ensure that everything is production-ready.

## Identifying Infrastructure Risks

In this second section, we will look at other important areas in your infrastructure to review for reliability risks. These areas include:

- **System risks**
    - Review connectivity, i.e., how different system components “talk” to each other.
    - Ensure compliance requirements are met.
    - Secure the system, ensuring data integrity and preventing unauthorized access.
- **Resources**
    - Ensure you have the necessary resources, including
    - Physical resources: CPU/RAM/storage.
    - Networking needs: Bandwidth/latency.
- **Monitoring**
    - Often overlooked as a reliability risk since it is used in identifying reliability risks.
    - It is important to identify areas not being monitored.
    - Organize monitored data logically.
- **Services**
    - **External** services include things you do not control.
        - Examples include cloud services, DNS, etc.
        - You can identify the impact and mitigations if a service goes down.
        - In some instances, you can create self-hosted services as backups.
    - **Internal** services are services that you have some control over.
        - Ensure you have redundancy with automated failover where possible.
        - Spread hosted services between physical hosts and locations when possible.

## Launch Review Checklist

Your launch checklist is used to guide your launch process and is an important part of ensuring your launch goes smoothly. You should have a general launch review checklist that you can adapt to any launch.

When designing your checklist, you should divide your checklist in a way that makes sense for your team. Each section of your checklist should be divided into two parts:

1. **Questions** for guiding the important parts for review.
2. **Action items** to complete before launch.
    - There will be some base action items that are always necessary, while others are added in response to the questions section.
