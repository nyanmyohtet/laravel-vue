<?php

namespace Tests;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;

abstract class TestCase extends BaseTestCase
{
  /**
   * DatabaseMigrations will refresh the database
   * every time you run the test cases.
   */
  use CreatesApplication, DatabaseMigrations;

  public function setUp(): void
  {
    parent::setUp();

    // set up passport
    Artisan::call('passport:install');
  }
}
