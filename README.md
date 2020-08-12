# laravel-vue

Testing Larave and Vue

## Tech

Docker: 19.03.12, build 48a66213fe

docker-compose: 1.17.1

PHP: 7.2.24

Composer: 1.10.8

NodeJS: 12.18.2

mysql: 5.7.30

## Build Front-end Asserts

`npm run build`

Watch assert files

`npm run watch`

## On Branch Change

Change to project directory and run following commands

`composer install --no-scripts`
to install composer packages used in back-end

`npm install`
to install NodeJS packages used in front-end

Finally, run

`npm run watch` to build front-end asserts and watch.

## Testing

Run all tests:

`docker-compose exec app php artisan test`

Run individual test:

`docker-compose exec app php artisan test/[Feature|Unit]/[FileName]`
