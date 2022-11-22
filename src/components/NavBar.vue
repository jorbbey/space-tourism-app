<template>
  <nav
    class="navigation flex justify-between md:justify-around items-center my-10 relative"
    style="width: 90%; margin: 20px auto;"
  >
    <img
      src="@/assets/shared/logo.svg"
      alt="App-logo"
      :class="{ 'hide-bar': hiddenBar }"
    />
    <div
      class="hidden md:block bg-gray-600 h-1 rounded"
      style="width: 35%; margin: 0 auto; filter: brightness(45%);"
    ></div>
    <div
      class="flex bg-transparent right-24 h-14 shadow-2xl drop-shadow-2xl w-1/2 nav-bar"
      v-show="!mobile"
    >
      <router-link to="/" class="p-4 mr-10 list-none nav-text cursor-pointer">
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
    <div
      class="cursor-pointer transition-all"
      v-show="mobile"
      @click="toggleMobileNav"
      :class="{ 'icon-active': mobileNav, 'hide-bar': hiddenBar }"
    >
      <img src="@/assets/shared/icon-hamburger.svg" alt="" />
    </div>
    <transition name="mobile-nav">
      <div
        class="mobile-menu flex flex-col bg-transparent relative right-6 h-screen w-full max-w-screen-sm top-0 left-0"
        v-show="mobileNav"
      >
        <router-link
          to="/"
          class="p-10 mr-10 mt-12 list-none nav-text cursor-pointer"
          @click="toggleBack"
        >
          Home
        </router-link>
        <router-link
          to="/destination"
          class="p-10 mr-10 list-none nav-text cursor-pointer"
          @click="toggleBack"
        >
          Destination
        </router-link>
        <router-link
          to="/crew"
          class="p-10 mr-10 list-none nav-text cursor-pointer"
          @click="toggleBack"
        >
          Crew
        </router-link>
        <router-link
          to="/technology"
          class="p-10 mr-10 list-none nav-text cursor-pointer"
          @click="toggleBack"
        >
          Technology
        </router-link>
        <div
          class="cursor-pointer transition-all absolute right-10 top-6"
          v-show="mobile"
          @click="toggleBack"
          :class="{ 'icon-active': mobileNav }"
        >
          <img src="@/assets/shared/icon-close.svg" alt="" />
        </div>
      </div>
    </transition>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      mobile: null,
      mobileNav: false,
      windowWidth: null,
      hiddenBar: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleMobileNav() {
      if (this.mobileNav == false) {
        this.mobileNav = true
        this.hiddenBar = true
      }
    },
    toggleBack() {
      if (this.mobileNav == true) {
        this.mobileNav = false
        this.hiddenBar = false
      }
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
  },
}
</script>

<style>
.nav-bar {
  /* background: linear-gradient(
    to right,
    rgb(1, 4, 29),
    transparent,
    transparent,
    rgb(1, 4, 29)
  ); */
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
}


.nav-text {
  color: rgb(221, 217, 217);
}

.nav-text::after {
  content: '';
  width: 0%;
  height: 2.5px;
  background: rgb(221, 217, 217);
  display: block;
  margin: auto;
  transition: 0.5s;
}

.nav-text:hover::after {
  width: 100%;
}


.icon-active {
  transform: rotate(180deg);
}

.mobile-menu {
  /* border-bottom-right-radius: 200px; */
  border-radius: 20px;
  background: linear-gradient(to right, rgb(9, 9, 70), rgb(9, 9, 70));
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from{
  opacity: 0;
  transform: translateX(-250px);
  margin-top: -150%;
}
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateX(250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
  margin-top: 0px;
}

.hide-bar {
  display: none;
}
</style>
