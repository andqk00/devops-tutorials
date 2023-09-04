#!/bin/bash

read -p "Enter a file or dir: " FILE

if [ -f "$FILE" ]
then
  echo "$FILE is a regular file."
  exit 0
elif [ -d "$FILE" ]
then
  echo "$FILE is a directory."
  exit 1
else
  echo "$FILE is something other than a regular file or directory."
  exit 2
fi