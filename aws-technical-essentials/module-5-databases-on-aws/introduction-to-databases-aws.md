# Introduction to Databases on AWS

A high-performing database is crucial to any organization. Databases support the internal operations of companies and store interactions with customers and suppliers.

## <u>I. History behind enterprise databases</u>

Choosing a database used to be a straightforward decision. Customers had only a few options to choose from. Typically, they would consider a few vendors and then, inevitably, choose one for all their applications. Businesses often selected a database technology before they fully understood their use case. Since the 1970s, the database type most commonly selected by businesses was a relational database.

## <u>II. Relational database benefits</u>

- **Complex SQL**: With SQL, you can `join` multiple tables so you can better understand relationships between your data.
- **Reduced redundancy**: You can store data in one table and reference it from other tables instead of saving the same data in different places.
- **Familiarity**: Because relational databases have been a popular choice since the 1970s, technical professionals often have familiarity and experience with them.
- **Accuracy**: Relational databases ensure that your data has high integrity and adheres to the atomicity, consistency, isolation, and durability (ACID) principle.

## <u>III. Relational database use cases</u>

Much of the world runs on relational databases. In fact, they’re at the core of many mission-critical applications, some of which you might use in your day-to-day life.

- **Applications that have a fixed schema**: These are applications that have a fixed schema and don't change often. An example is a lift-and-shift application that lifts an app from on-premises and shifts it to the cloud, with little or no modifications.
- **Applications that need persistent storage**: These are applications that need persistent storage and follow the ACID principle, such as:
    - Enterprise resource planning (ERP) applications
    - Customer relationship management (CRM) applications
    - Commerce and financial applications

## <u>IV. Choose between unmanaged and managed databases</u>

If you want to trade your on-premises database for a relational database on AWS, you first need to select how you want to run it—managed or unmanaged. Managed services and unmanaged services are handled similar to the shared responsibility model. The shared responsibility model distinguishes between AWS security responsibilities and the customer’s security responsibilities. Likewise, managed compared to unmanaged can be understood as a trade-off between convenience and control.

### **Unmanaged databases**

If you operate a relational database on premises, you are responsible for all aspects of operation. This includes data center security and electricity, host machines management, database management, query optimization, and customer data management. You are responsible for absolutely everything, which means you have control over absolutely everything.

Now, suppose you want to shift some of the work to AWS by running your relational database on Amazon Elastic Compute Cloud (Amazon EC2). If you host a database on Amazon EC2, AWS implements and maintains the physical infrastructure and hardware and installs the EC2 instance operating system (OS). However, you are still responsible for managing the EC2 instance, managing the database on that host, optimizing queries, and managing customer data.

This is called an unmanaged database option. In this option, AWS is responsible for and has control over the hardware and underlying infrastructure. You are responsible for and have control over management of the host and database.

![image](images/unmanaged-databases.png)

You are responsible for everything in a database hosted on-premises. AWS takes on more of that responsibility in databases hosted in Amazon EC2.

### **Managed databases**

To shift more of the work to AWS, you can use a managed database service. These services provide the setup of both the EC2 instance and the database, and they provide systems for high availability, scalability, patching, and backups. However, in this model, you’re still responsible for database tuning, query optimization, and ensuring that your customer data is secure. This option provides the ultimate convenience but the least amount of control compared to the two previous options.

![image](images/managed-databases.png)
