#!/bin/bash

function logging() {
    echo $RANDOM
    logger -i -t randomly -p user.info $RANDOM
}

logging
logging
logging