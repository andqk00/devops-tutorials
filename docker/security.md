# Docker Security

By default, Docker run processes with an user that has limited capabilities on the system host. To change this, there are several ways.

```sh
# Add capabilities
docker run --cap-add MAC_ADMIN ubuntu

# Remove capabilities
docker run --cap-drop KILL ubuntu

# Run user with full privileges
docker run --privileged ubuntu
```