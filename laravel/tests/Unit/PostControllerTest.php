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

  public function testStore()
  {
    $postController = new PostController();
    $request = new Request([
        'title' => 'Unit Test',
        'body' => 'Using PHPUnit'
      ]);
    $result = $postController->store($request);
    $result = (array) $result;
    $message = $result['original'];
    $this->assertEquals('successfully added', $message);
  }
}
