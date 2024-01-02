#!/bin/bash

echo "********************"
echo "** Pushing image ***"
echo "********************"

IMAGE="maven-project"

echo "** Logging in ***"
docker login -u doquockhanhan -p $PASS
echo "*** Tagging image ***"
docker tag $IMAGE:$BUILD_TAG doquockhanhan/$IMAGE:$BUILD_TAG
echo "*** Pushing image ***"
docker push doquockhanhan/$IMAGE:$BUILD_TAG
