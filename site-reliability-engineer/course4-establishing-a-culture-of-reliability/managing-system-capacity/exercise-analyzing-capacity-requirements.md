# Exercise Analyzing Capacity Requirements

## CabinetDesigner2.0 Response Times

Looking at the response times from load testing on the entire application, we can see that

- RAM should be increased. A good place to start would be increasing RAM by 10-15% and rerunning the load test to see if that decreases response times to the appropriate levels. RAM utilization was almost at 100% for mid to high levels of load, which indicates it may not be able to hand demand effectively.
- CPU can either stay the same or decrease slightly (5% would be a good start) since it leveled out at high loads.
- Storage levels were steady; they can stay where they are since they are steady throughout the test.

Your values may vary but you should indicate that RAM needs to be increased since it spiked to almost 100% utilization. CPU should either stay the same or increase slightly since its utilization was high but within an acceptable range. And storage should stay the same.

## CabinetDesigner2.0 Database Response Times

Looking at the response times from load testing on the database, we can see that

- RAM should be increased. A good place to start would be increasing RAM by 15-20% and rerunning the load test to see if that decreases response times to the appropriate levels. RAM utilization was almost at 100% for most of the load testing. You can see that response times increased sharply as more load was added due to the over-utilization of RAM.
- CPU needs to increase by 15-20% because, like RAM, it increased sharply during the test and resulted in high response times.
- Storage levels were steady. They can stay where they are since they are steady throughout the test. Storage usage was increasing steadily but is not a cause for concern at the moment.

Your values may vary but you should indicate that RAM and CPU need to be increased since it spiked to almost 100% utilization, which resulted in increased response times. Storage should stay the same since it increased steadily but not excessively.
