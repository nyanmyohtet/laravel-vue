<?php

namespace Tests\Unit;

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Tests\TestCase;

class PostControllerTest extends TestCase
{
    /**
     * Set up before test case
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
    }

    /**
     * Test Store Function
     *
     * @return void
     */
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
