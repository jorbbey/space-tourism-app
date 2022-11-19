<template>
  <nav class="flex justify-around items-center my-10 w-1/2">
    <div
      class="lg:flex bg-transparent right-24 absolute h-14 shadow-2xl drop-shadow-2xl sm:hidden"
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
