#!/bin/bash

# Release branch
# master="master"

#git pull origin $master
git pull
echo "Current pull origin..."

# Auto generate version number
standard-version

git push --follow-tags

echo "Git push origin..."
echo "Release finished."
