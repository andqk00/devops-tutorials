#!/bin/bash
crumb=$(curl -u "general:123456" -s 'http://jenkins.andqk.local:8080/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)')
# curl -u "general:123456" -H "$crumb" -X POST http://jenkins.andqk.local:8080/job/alpha-remote-task/build?delay=0sec
curl -u "general:123456" -H "$crumb" -X POST  http://jenkins.andqk.local:8080/job/backup-mysql-aws/buildWithParameters?MYSQL_HOST=mysql&DATABASE_NAME=jenkins&AWS_S3_BUCKET=jenkins-mysql-backup-andqk
