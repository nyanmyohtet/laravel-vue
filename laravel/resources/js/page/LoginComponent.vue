<template>
  <div>
    <h1>Larave Vue</h1>
    <form>
      <label for="email">
        email:
        <input type="text" name="email" />
      </label>
      <label>
        password:
        <input type="password" name="password" />
      </label>
      <input type="submit" name="login" value="Login" v-on:click.prevent="loginHandler">
    </form>
  </div>
</template>

<script src="../service/LoginService.js"></script>
