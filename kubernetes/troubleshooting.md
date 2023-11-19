# Kubernetes Troubleshooting

## Application Failure

### Check Accessibility

Check if the application is accessible through URL using several methods like `curl`, `ping`.

### Check Service Status

Check if Service had discovered endpoints of the application inside the Pod. **(Check labels and selectors)**

### Check POD

Check events, logs of POD

> Use command `kubectl logs ... -f --previous` to show logs of the previous destroyed container.

### Check Dependent Service

Use the above methods.

## Control Plane Failure

### Check Node Status

```sh
# Check nodes status
kubectl get nodes

# Check pods status
kubectl get pods

# Check controlplane pods - kubeadm case
kubectl get pods -n kube-system

# Check controlplane services - manually deployed case
service kube-apiserver status
service kube-controller-manager status
service kube-scheduler status
service kubelet status
service kube-proxy status
```

### Check Service Logs

```sh
# kubeadm case
kubectl logs ... -n kube-system

# manually deployed case
sudo journalctl -u ...
```

## Worker Node Failure

### Check Node Status

```sh
kubectl get nodes

kubectl describe nodes ...
```

> Check if any condition other than `Ready` is set to `True`. In case worker stop communicate with master, condition is set to `Unknown`.

### Check Node

Check if node is online at all or is crashed. Then restart the node if needed.

```sh
top

df -h
```

### Check Kubelet Status

```sh
service kubelet status

sudo journalctl -u kubelet
```

### Check Certificates

```sh
openssl x509 -in /var/lib/kubelet/worker-1.crt -text
```

Ensure they're not expired, and they're part of the right group, and that the certificates are issued by the right CA.