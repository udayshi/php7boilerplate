#!/bin/bash
CUR_DIR=`pwd`
BASE_NAME=`basename $CUR_DIR |sed 's/_//g'`
container=${1}
if [ "$1" = "" ]; then
    container=web
fi

which_container=${BASE_NAME}_${container}_1

if [ "$1" = "db" ]; then
    docker exec -it $which_container mysql -u root -proot
else
    docker exec -it $which_container /bin/bash
fi
