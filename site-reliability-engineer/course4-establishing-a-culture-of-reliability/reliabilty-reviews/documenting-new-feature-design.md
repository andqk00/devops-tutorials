# Documenting New Feature Design

Changes to your system introduce new risks, so it is important to review these changes carefully. You can document these new features to help flush out the risks.

Key things to review and document are:

1. **Stakeholders**
    a. Developers
        - Developed the feature and have a deep understanding of the feature.
        - You should consult them if a feature is causing issues or needs performance tuning.
    b. Maintainers
        - Maintain the system after feature development.
        - May include members of the original development team or a whole new group.
    c. Make sure to document the point of contact for the service.
2. **Resource Needs**
    - New features need resources.
    - Resources include:
        - Physical resources: CPU/RAM/Storage.
        - Networking resources for sending/receiving data.
        - General resources: DNS name, firewall rules, etc.
3. **Dependencies**
    a. **Internal**: Things within your company. For example,
        - Self-hosted servers (database, caching, web, etc.)
        - Private networking
        - In-house libraries
    b. **External**: Anything you do not manage directly. For example,
        - Outside services (DNS, CDNs, cloud providers, etc.)
        - Third-party libraries
        - Vendor support
4. **Feature Design**
    - Include architectural diagrams.
    - A data model for APIs and databases.
    - Services and clients utilized by the feature.
    - Feature limitations.
