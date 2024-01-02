#!/bin/bash

echo maven-project > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo $PASS >> /tmp/.auth

scp -i /opt/andqk-prod /tmp/.auth andqk-prod@13.250.15.197:/tmp/.auth
scp -i /opt/andqk-prod ./jenkins/deploy/publish andqk-prod@13.250.15.197:/tmp/publish
ssh -i /opt/andqk-prod andqk-prod@13.250.15.197 "/tmp/publish"
