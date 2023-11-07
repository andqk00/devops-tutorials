# Kubernetes imperative commands

``--dry-run``: By default as soon as the command is run, the resource will be created. If you simply want to test your command , use the ``--dry-run=client`` option. This will not create the resource, instead, tell you whether the resource can be created and if your command is right.

### Generate YAML file

```
kubectl create deployment nginx --image=nginx --dry-run=client -o yaml > nginx-deployment.yaml
```

### Service

**ClusterIP**

```
kubectl expose pod redis --port=6379 --name redis-service --dry-run=client -o yaml
```

OR

```
kubectl create service clusterip redis --tcp=6379:6379 --dry-run=client -o yaml
```

**NodePort**

```
kubectl expose pod nginx --type=NodePort --port=80 --name=nginx-service --dry-run=client -o yaml
```

OR

```
kubectl create service nodeport nginx --tcp=80:80 --node-port=30080 --dry-run=client -o yaml
```

- Create command won't use pod's labels as selectors.
- Expose command can't pass in node port.

### View Certificates

```
openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout
```

### KubeConfig

```
# View kubeconfig file (add --kubeconfig=custom-file to specify a custom kubeconfig file)
kubectl config view

# Update current context
kubectl config use-context <user>@<cluster>
```