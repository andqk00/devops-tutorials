#!/bin/bash

read -p "How many lines of /etc/passwd would you like to see? " LINE_NUM

INDEX=0
while read LINE
do
    if [ "$INDEX" -lt "$LINE_NUM" ]
    then
        echo $LINE
        ((INDEX++))
    else
        break
    fi
done < /etc/passwd