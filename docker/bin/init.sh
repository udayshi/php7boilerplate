#!/bin/bash
echo "###########################################"
echo "Cleaning Cache"
rm -rf /app/var/cache/*
echo "Cleaning Log"
rm -rf /app/var/log/*

echo "###########################################"
bash