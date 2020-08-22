#!/bin/bash

# run php unit
echo "Run PHP Unit..."
docker-compose exec app php artisan test
