# Debugging Scripts

```
#!/bin/bash -x
```
Prints commands as they execute for the whole file.

```
set -x
set +x
```
Same as above but just for the commands between these 2s.

```
#!/bin/bash -e
```
Exit on error.

```
#!/bin/bash -v
```
Prints shell input lines as they are read.

```
help set | less
```
For more information.