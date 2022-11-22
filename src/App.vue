<template>
  <NavBar />
  <div class="w-full flex">
  </div>
</template>

<script>
import '@/assets/tailwind.css'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App', 
  components: {
    NavBar,
  },
}
</script>
<style>
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(61, 61, 224);
}
</style>
