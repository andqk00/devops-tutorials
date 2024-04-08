# Automated Backups for SQL

Let's talk backups. We talked about log shipping and geo-replication but one of the oldest and tried-and-true methods for recovery is **backups**.

What are backups? Backups are:

- Point in time snapshot of your data. So if you take a backup of your database at 5AM, that's a 5AM snapshot of the data.
- They can be taken in various frequencies. Maybe as little as once a day to as frequently as every 5 minutes.
- They can be retained for various times frames. Maybe some as little as 1 day and maybe several years.
- They can be stored in various repository types. Maybe some in an S3 bucket in multiple regions or maybe an on-prem storage pool.
- Backups are the cheapest methods for recovery.

Backups vary from replication. They are NOT a form of replication. Some backups may be taken and stored but never used. One of the downsides of backups is that it takes a long time to restore since the ENTIRE database must be restored from the backup.

Backups are used for **full data restoration** generally. For instance, if you delete a table in a replicated database, chances are the replication is so fast that delete will get written to the secondary site before you have a chance to stop it.

Backups on the other hand allow you to access multiple snapshots of the data. So in the case of data corruption and loss, you could restore a copy of the data from an earlier backup and come back online. Backups, in general, should be:

- Isolated from data corruption
- Isolated from regional and zonal failures
- Isolated from any malicious actors or accidents inactive regions

To ensure you always have backups, **automated backups** are a strategy you can use.

- Providers like AWS RDS have built-in automated backups.
- Providers can manage the backups so you can focus on other tasks.
- The more backups you take, the higher the cost since it means more storage.
- Generally, it's a good idea to backup to multiple regions. Providers may handle this differently so it's best to check with their documentation.

By default AWS RDS:

- Stores backups in S3 buckets (though you don't have to manage that part)
- Provides daily backups
- Creates backups in the same region as your database
- Can set up additional backup storage locations
