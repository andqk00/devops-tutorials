# Maintaining an As-Built Document

An as-built document describes the current state of an application and is constantly evolving as features are added.

## As-Built vs Design Documents

- As-built documents capture the current state and the actual implementation of a feature, whereas a design doc is a blueprint for building a feature. A lot can change between the design and the finished product, so it is important to document the final version.
- As-built docs are **continuous**; that is, you add to it every time something new is added, whereas design documents are **static** and written before a feature is implemented.
- You add to the as-built docs after completing the feature but before releasing it, whereas you write design docs before development starts and use them to guide development.

Now that you have everything documented, you need to provide a reliability assessment. This should include a list of potential failures with possible mitigations.

## Demo: Sections of an As-Built Document

In this section, we walked through a sample as-built document, covering how you could potentially document the different parts of the new feature. The sections in this sample as-built document include the following:

- Stakeholders
- Code Changes
- Data and System Changes
- Design Decision Highlights
- Test Section
- Deployment Notes

A key takeaway is to keep the sections brief, with links that go back to more detailed descriptions. You will practice creating a template of an as-built document in the exercise later.

## Components of an As-Built Document

Different companies might use different As-Built document templates since they have different needs. You can find some of the typical sections below that you should be familiar with.

**Stakeholders**
This section should include everyone who was involved in this release or in the case of large teams, a point-of-contact for that part of the release. Keeping a record of stakeholders can help identify those with knowledge of the release in case of issues.

**Code Changes**
Include a high-level overview of the code changes involved with this release. This section should include a summary of the changes with links back to tickets or other supporting documentation.

**Data Model Changes**
Include a summary of changes to APIs, database schemas, JSON structure, etc. This will help identify any data inconsistencies or problems with communication between system components. This section should highlight the major changes with links to supporting tickets and documentation for a more in-depth review.

**System/Infrastructure Changes**
In this section, highlight any new changes to the infrastructure or system, like adding a new caching server or additional background services. Include diagrams as necessary with links to supporting documentation for a more in-depth description of the changes.

**Release Testing**
Include the results from the release testing, emphasizing any tests not passing 100%. Note these to assist in any future troubleshooting, to reach 100% passing.

**Design Decisions**
Describe why major changes were implemented, especially the non-obvious ones. The next person to read the document should have a basic understanding of why these designs were chosen. Provide links to supporting documentation so that the reader can read more in-depth about the design decisions.

**Deployment Notes**
Take note of anything that stood out during deployment. Focus on things that could be improved or may cause issues later.

**Feature Additions**
This section should list the new features that are included in this release, with links to supporting tickets and documentation.
