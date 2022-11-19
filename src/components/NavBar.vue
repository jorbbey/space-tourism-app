<template>
  <nav class="flex justify-around items-center my-10 w-1/2">
    <img src="@/assets/shared/logo.svg" alt="App-logo" />
    <div
      class="bg-gray-600 h-1 rounded"
      style="width: 70%; filter: brightness(45%);"
    ></div>
    <div
      class="lg:flex bg-transparent right-24 absolute h-14 shadow-2xl drop-shadow-2xl sm:hidden nav-bar"
    >
      <router-link
        to="/"
        class="p-4 mr-10 list-none nav-text cursor-pointer"
      >
        Home
      </router-link>
      <router-link
        to="/destination"
        class="p-4 mr-10 list-none nav-text cursor-pointer"
      >
        Destination
      </router-link>
      <router-link
        to="/crew"
        class="p-4 mr-10 list-none nav-text cursor-pointer"
      >
        Crew
      </router-link>
      <router-link
        to="/technology"
        class="p-4 mr-10 list-none nav-text cursor-pointer"
      >
        Technology
      </router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  },
}
</script>

<style>
     .nav-bar{
          width: 40%;
     }
</style>
