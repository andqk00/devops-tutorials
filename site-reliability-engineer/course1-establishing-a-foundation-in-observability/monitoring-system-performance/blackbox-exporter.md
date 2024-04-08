# Create Secret and Install Blackbox_exporter

```sh
kubectl create secret generic additional-scrape-configs --from-file=prometheus-additional.yaml --namespace monitoring
helm install prometheus-blackbox-exporter prometheus-community/prometheus-blackbox-exporter -f blackbox-values.yaml --namespace monitoring
```
