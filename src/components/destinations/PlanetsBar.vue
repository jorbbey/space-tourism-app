<template>
  <nav class="flex justify-around items-center my-10 w-full" style="margin: 0 auto;">
    <div
      class="flex bg-transparent h-14 shadow-2xl drop-shadow-2xl nav-bar"
    >
      <router-link
        to="/moon"
        class="p-4 mr-10 list-none nav-text cursor-pointer"
      >
        Moon
      </router-link>
      <router-link
        to="/mars"
        class="p-4 mr-10 list-none nav-text cursor-pointer"
      >
        Mars
      </router-link>
      <router-link
        to="/europa"
        class="p-4 mr-10 list-none nav-text cursor-pointer"
      >
        Europa
      </router-link>
      <router-link
        to="/titan"
        class="p-4 mr-10 list-none nav-text cursor-pointer"
      >
        Titan
      </router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'PlanetsBar',
  data() {
    return {}
  },
}
</script>

<style scoped>
nav{
  background: url('@/assets/destination/background-destination-desktop.jpg') no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
} 
</style>
