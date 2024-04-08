# Grafana Dashboard Demo

> Note there are 3 types of Grafana graphs we discuss in this demo:

- **Time-series**: time series is like a line graph where it shows points along the time on the x-axis of the graph. This is a common graph where you want to see high and low points over a series of times.
- **Gauge**: a gauge is where you want to see how much is utilized. Think of it as a gauge in your car where the arrow points to a percentage used or how high a metric is.
- **Stat**: stat is just a static value displayed such as how much of a resource is left or how long a site has been online.

Here are the queries used in this demo:

- Time-series

```
rate(node_cpu_seconds_total{mode="system"}[1m])
```

- Stat

```
100 - (avg by (instance) (rate(node_cpu_seconds_total{job="node-exporter", mode="idle"}[1m])) * 100)
```

Here are some more queries for you to get your hands dirty!

```
irate(node_network_transmit_bytes_total[5m]) > 0
```

Good for a line graph. It shows the network rate for the Prometheus server over the last 5 minutes where there is actual traffic ( > 0).

```
up{job="node"}
```

A simple query good for a stat type where all it reports is if the Prometheus server is up or not. 1 for up, 0 for down.

```
(avg(irate(node_cpu_seconds_total{mode="idle"}[30m])) * 100)
```

Idle CPU usage over the last 30 minutes as a percentage. This is a good query for a gauge type.
