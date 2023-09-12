#!/bin/bash

# if [ $(ls *.jpg | wc -l) == 0 ]
# then
#     echo "There are no images in the current directory"
#     exit 1
# fi

shopt -s nullglob

DATE=$(date +"%Y%m%d")

for IMAGE in *.jpg
do
    echo "Renaming file ${IMAGE}"
    mv $IMAGE ${DATE}${IMAGE}
done