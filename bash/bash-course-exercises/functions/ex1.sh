#!/bin/bash

function file_count() {
    local FILE_COUNT=$(ls | wc -l)
    echo $FILE_COUNT
}

file_count