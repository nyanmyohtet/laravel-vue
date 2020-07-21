<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Http\Request;
use App\Http\Controllers\PostController;

class PostControllerTest extends TestCase
{

  public function setUp(): void
  {
    parent::setUp();

    $this->user = \App\User::first();
  }

  /**
   * A basic unit test example.
   *
   * @return void
   */
  public function testExample()
  {
    $this->assertTrue(true);
  }

}
