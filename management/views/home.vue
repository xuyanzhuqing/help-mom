<template>
 <div class="container">
  <div class="columns">
    <div class="column col-auto nav-box">
      <ul class="nav">
        <li v-for="route in menuRoutes" :key="route.name" class="nav-item">
          <router-link :to="{ path: route.path }">{{route.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="column ">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Settings</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Change avatar</a>
        </li>
      </ul>
      <router-view/>
      <router-view name="lessons"/>
    </div>
  </div>
</div>
</template>
<script setup>
import { menuRoutes } from '&/router/index.js'

</script>
<style lang="scss" scoped>
.container, .columns {
  width: 100%;
  height: 100%;
}
.nav-box {
  width: 174px;
  height: 100%;
  background: #5755d9;
}

.nav {
  & > .nav-item a {
    color: rgba(255, 255, 255, 0.6)
  }
  & > .nav-item.active a {
    color: #fff
  }
}
</style>