#!/bin/bash

# install JavaScript libraries
echo "Run npm install..."
docker-compose exec app npm install
