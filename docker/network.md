# Docker Networking

## Network Options

- `--network none`: container is isolated, none traffic in or out.
- `--network host`: container is attached to host network, if deploy a web app on port 80, then you can access it through host IP at port 80.
- `bridge (default)`: an internal private network is created which host and containers attach to, default address 172.17.0.0, each device connecting get its own private IP.

## Commands

```sh
# Check docker network (docker: bridge - host: docker0)
docker network ls

# Port forwarding from docker host to containers
docker run -p 8080:80 nginx

```