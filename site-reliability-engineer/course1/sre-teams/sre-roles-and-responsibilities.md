# Defining SRE Roles and Responsibilities

## SRE Team Structure:

The SRE team structure will vary from company to company. The ideal size is five, and this number will be used throughout the part of this lesson. There are five distinct roles:

**Team Lead:**

- Directs the work
- Keeps team focused
- Contributes to architecture meetings
- Forms workflows of the team

**System Architect:**

- Create scalable infrastructure
- Document/Diagram infrastructure
- Make recommendations for new technologies
- Provide migration paths to new technology
- This role would use IaC (Infrastructure as Code) tools to provision infrastructure and diagramming tools.

**Infrastructure Engineer:**

- 50% development tasks, 50% operations tasks
- Can use their time to automate Ops tasks
- Planning/executing system patches/updates
- This role would use different scripting languages to automate tasks, as well as configuration management tools like Ansible.

**Release Manager:**

- Change management
- Code releases
- Ensures code has all dependencies satisfied
- Executes the release, and rollback procedures
- This role would use a CI/CD tool along with the source control tool to ensure the code could be released or rolled back, as well as verify the correct changes.

**Monitoring Engineer:**

- Creating dashboards
- Managing alerting rules
- Usually first to know of an incident
- Manages monitoring rules/governance for new/existing IT infrastructure
- This role would use monitoring software such as Prometheus/Grafana or be most interested in the dashboarding/alerting features of other types of monitoring software.
