<template>
  <div id="wrapper" class="h-screen -mt-52">
    <div
      class="flex lg:flex-row items-center justify-around sm:flex-col-reverse body-line"
      style="width: 90%; margin: 200px auto;"
    >
      <div class="flex flex-col w-full md:w-1/2 sm:text-center mt-56">
        <h3 class="text-white sm:text-center">SO YOU WANT TO TRAVEL TO</h3>
        <h1
          class="text-white tracking-widest sm:text-center"
          style="font-size: 82px;"
        >
          SPACE
        </h1>
        <p
          class="text-white w-2/4 py-2 text-base sm:text-lg sm:w-full sm:text-center" style="line-height: 2;"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        class="bg-white rounded-full sm:mb-20 sm:text-center cursor-pointer  mt-56"
        style="height: 200px; width: 200px;"
      >
        <p
          class="text-blue-800 text-xl tracking-widest sm:text-center cursor-pointer"
          style="margin: 96px 50px;"
        >
          EXPLORE
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
}
</script>

<style scoped>
#wrapper {
  background: url('@/assets/home/background-home-desktop.jpg') no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.mobile-nav {
  color: rgb(221, 217, 217);
  background: rgb(3, 3, 44);
  height: 100vh;
  font-size: 24px;
}

.mobile-nav li::after {
  content: '';
  width: 0%;
  height: 2.5px;
  background: rgb(221, 217, 217);
  display: block;
  margin: auto;
  transition: 0.5s;
}

.mobile-nav li:hover::after {
  width: 100%;
}
/* 
@media screen and (min-width: 480px) {
  .body-text {
  }

  .explore {
  }
} */
</style>
