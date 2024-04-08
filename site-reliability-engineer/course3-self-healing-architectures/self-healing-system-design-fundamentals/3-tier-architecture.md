# Three-tier Architecture

Three-tier architecture is a design pattern in which you break your application into 3 logical groups

- A presentation layer, known as the frontend
- An application layer, the backend
- A data layer, the database, or data source

**Why three-tier architecture?**

- It can reduce the speed at which developers are able to push features to production.
- From a cost perspective, it can reduce the engineering complexity of integrating new services.
- Ability to update the technology stack in individual layers without impacting others
- Development teams can work in their own areas of expertise. For example, an engineer can make changes to the application logic in isolation from the frontend code.
- Reliability and independence of the underlying services. For example, deploying to a variety of databases in the data layer instead of being locked into one particular technology.
- Ability to integrate a choice of frameworks in each layer that are best suited for the application
- You can implement different scaling strategies at each tier to better suit their use case
- Ability to utilize new technologies as they become available. It ensures your product is flexible enough to adapt to future technology changes so you can maintain a competitive advantage.

**Some issues to be aware of in the three-tier architecture design pattern:**

- Teams must have good lines of communication when an application change impacts multiple layers
- Frontend clients do not maintain a persistent database connection, depending on your application this may not suit your use case.
- The need for integration tests to maintain contracts between the tiers. For example, if an API changes in the application layer, the presentation layer must be updated.
