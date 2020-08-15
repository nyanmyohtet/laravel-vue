<template>
  <div>
    <h1>Register</h1>
    <form>
      <label for="name">
        name:
        <input type="text" name="name" v-model="name" />
      </label>
      <label for="email">
        email:
        <input type="text" name="email" v-model="email" />
      </label>
      <label for="password">
        password:
        <input type="password" name="password" v-model="password" />
      </label>
      <label for="c_password">
        confirm password:
        <input type="password" name="c_password" v-model="c_password" />
      </label>
      <input
        type="submit"
        value="Register"
        v-on:click.prevent="registerHandler"
      />
    </form>
  </div>
</template>

<script src="../service/RegisterService.js"></script>
