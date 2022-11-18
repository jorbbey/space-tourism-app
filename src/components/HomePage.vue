<template>
  <div id="wrapper">
    <nav class="flex justify-around items-center my-10 w-1/2">
      <img src="@/assets/shared/logo.svg" alt="App-logo" />
      <div class="bg-gray-600 h-1 rounded" style="width: 70%; filter: brightness(45%)"></div>
      <div class="lg:flex bg-transparent absolute right-24 h-14 shadow-2xl drop-shadow-2xl sm:hidden nav-bar">
        <li
          v-for="item in navList"
          :key="item.id"
          class="p-4 mr-10 list-none nav-text cursor-pointer"
        >
          {{ item }}
        </li>
      </div>
    </nav>
  </div>
  <div class="flex lg:flex-row items-center justify-around sm:flex-col-reverse body-line" style="width: 90%; margin: 200px auto;">
    <div class="flex flex-col w-1/2 sm:text-center">
      <h3 class="text-white sm:text-center">SO YOU WANT TO TRAVEL TO</h3>
      <h1 class="text-white tracking-widest sm:text-center" style="font-size: 82px;">SPACE</h1>
      <p class="text-white w-2/4 py-2 text-base sm:text-lg sm:w-full sm:text-center">Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
    </div>
    <div class="bg-white rounded-full sm:mb-20 sm:text-center" style="height: 200px; width: 200px;">
      <p class="text-blue-800 text-xl tracking-widest sm:text-center" style="margin:90px 50px;">EXPLORE</p>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css'
// import logo from '@assets/shared/logo.svg'
export default {
  name: 'HomePage',
  data() {
    return {
      navList: ['Home', 'Destination', 'Crew', 'Technology'],
      MnavList:  ['Home', 'Destination', 'Crew', ' Technology'],
    }
  },
}
</script>

<style>
body {
  background: url('@/assets/home/background-home-desktop.jpg') no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.nav-bar{
  background: linear-gradient(to right, rgb(1, 4, 29), transparent, transparent, rgb(1, 4, 29));
}

.nav-text{
    color:  rgb(221, 217, 217);
}


.nav-text::after {
  content: '';
  width: 0%;
  height: 2.5px;
  background: rgb(221, 217, 217);;
  display: block;
  margin: auto;
  transition: 0.5s;
}

.nav-text:hover::after {
  width: 100%;
}

@media screen and (min-width: 480px) {
    .body-text{

    }

    .explore{

    }

}
</style>
