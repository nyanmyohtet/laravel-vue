<template>
  <div class="container">
    <b-nav v-if="showNav">
      <b-nav-item to="/" active>Home</b-nav-item>
      <b-nav-item to="/posts">Post</b-nav-item>
      <b-nav-item to="/post/create">Create Post</b-nav-item>
      <b-nav-item disabled>Logout</b-nav-item>
    </b-nav>
    <!-- <transition name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script src="./AppService.js"></script>
