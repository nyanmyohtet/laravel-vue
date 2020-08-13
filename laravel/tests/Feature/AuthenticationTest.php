<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{

  public function testRequiredFieldsForRegistration()
  {
    $this->json('POST', 'api/register', ['Accept' => 'application/json'])
      ->assertStatus(401)
      ->assertJson([
        "error" => [
          "name" => ["The name field is required."],
          "email" => ["The email field is required."],
          "password" => ["The password field is required."],
          "c_password" => ["The c password field is required."],
        ]
      ]);
  }

  public function testRepeatPassword()
  {
    $userData = [
      "name" => "John Doe",
      "email" => "doe@example.com",
      "password" => "demo12345"
    ];

    $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
      ->assertStatus(401)
      ->assertJson([
        "error" => [
          "c_password" => ["The c password field is required."]
        ]
      ]);
  }

  public function testSuccessfulRegistration()
  {
    $userData = [
      "name" => "test user",
      "email" => "testuser@laravel.com",
      "password" => "password123",
      "c_password" => "password123"
    ];

    $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
      ->assertStatus(200)
      ->assertJsonStructure([
        "success" => [
          "token",
          "name"
        ],
      ]);
  }

  public function testMustEnterEmailAndPassword()
  {
    $this->json('POST', 'api/login')
      ->assertStatus(401)
      ->assertJson([
          "error" => "Unauthorised"
      ]);
  }

  public function testSuccessfulLogin()
  {
    $user = factory(User::class)->create([
      'email' => 'sample@test.com',
      'password' => bcrypt('sample123'),
    ]);

    $loginData = ['email' => 'sample@test.com', 'password' => 'sample123'];

    $this->json('POST', 'api/login', $loginData, ['Accept' => 'application/json'])
      ->assertStatus(200)
      ->assertJsonStructure([
        "success" => ["token"]
      ]);
    $this->assertAuthenticated();
  }
}
