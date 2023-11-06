# Kubernetes Security

## Authentication - Who can access?

- Files - username password
- Files - username token
- Certificates
- External service providers (LDAP, etc.)
- Service Accounts (For machines, not users)

## Authorization - What can they do?

- RBAC Authorization
- ABAC Authorization
- Node Authorization
- Webhook Mode

## TLS in Kubernetes

> There also is a pair of keys for Certificate Authority (CA), named `ca.crt` and `ca.key`.

![](./images/k8s-certs.png)

### Certs creation

> The Certificate Name (CN) is for displayed in the audit logs and elsewhere so a relevant name is prefered. <br>
> The `O` in `-subj` is a reference to the group the cert belongs to.

<b>1. Generate CA</b>

```
# Generate Keys
openssl genrsa -out ca.key 2048

# Certificate Singing Request
openssl req -new -key ca.key -subj "/CN=KUBERNETES-CA" -out ca.csr

# Sign Certificates
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```

<b>2. Admin User and other clients</b>

```
# Generate Keys
openssl genrsa -out admin.key 2048

# Certificate Singing Request
openssl req -new -key admin.key -subj "/CN=kube-admin/O=system:masters" -out admin.csr

# Sign Certificates
openssl x509 -req -in admin.csr -CA ca.crt -CAkey ca.key -out admin.crt
```

> Do these steps for other clients such as Scheduler, Controller-Manager, etc.
