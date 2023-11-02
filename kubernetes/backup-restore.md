# Backup and Restore

## Resource Configs

```
kubectl get all --all-namespaces -o yaml > all-deploy-services.yaml
```

## ETCD

```
# Backup
ETCDCTL_API=3 etcdctl snapshot save snapshot.db

# Restore
service kube-apiserver stop
ETCDCTL_API=3 etcdctl snapshot restore snapshot.db --data-dir <backup-file-dir>

# Configure etcd.service to use new data dir, then
systemctl daemon-reload
service etcd restart
service kube-apiserver start
```

> For etcdctl command, need to specify:
> - --endpoints=https://127.0.0.1:2379
> - --cacert=/etc/etcd/ca.crt
> - --cert=/etc/etcd/etcd-server.crt
> - --key=/etc/etcd/etcd-server.key