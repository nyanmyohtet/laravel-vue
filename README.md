# laravel-vue

Testing Larave and Vue

## Development Environment Setup

### Clone project,

`git clone git@github.com:nyanmyohtet/laravel-vue.git`

### Build Docker Images and Up,

`cd laravel-vue`

`docker-compose up -d`

### Install Composer Dependencies,

`docker-compose exec app composer install --no-scripts`

### Copy .env file,

`docker-compose exec app cp .env.example .env`

### Generate APP_KEY (laravel),

`docker-compose exec app php artisan key:generate`

### Migrate Database,

`docker-compose exec app php artisan migrate`

### Install Laravel Passport,

`docker-compose exec app php artisan passport:install`

### Install NodeJS Dependencies,

`docker-compose exec app npm install`

### Watch Front-end,

`docker-compose exec app npm run watch`

Now, app is serving on [http://localhost:8000](http://localhost:8000)

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
