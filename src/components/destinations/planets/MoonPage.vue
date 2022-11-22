<template>
  <div id="wrapper"
    class="flex flex-col md:flex-row justify-around items-center relative"
    style="width: 90%; height: 150vh; margin: 120px auto;"
  >
    <div
      class="flex flex-col justify-around items-center w-full md:w-1/2 h-screen"
    >
      <h2 class="text-xl w-full" style="color: rgb(221, 217, 217);">
        PICK YOUR DESTINATION
      </h2>
      <PlanetsBar />
      <img src="@/assets/destination/image-moon.png" alt="mars-image" class="w-2/4 md:w-10/12 my-14"/>
    </div>
        <div
      class="flex flex-col justify-around items-center w-3/4 h-96 m-auto"
    >
      <h1 class="text-white text-left my-10 text-6xl md:text-10xl">MOON</h1>
      <p class="text-white w-full md:w-2/3 text-center md:text-left mb-12" style="line-height: 2;">
       See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.
      </p>
      <hr class="w-full md:w-2/3 bg-gray-300 my-6" style="filter: brightness(45%);">
     <div class="flex justify-between md:justify-around items-center w-full h-auto">
          <div class="text-left" style="color: rgb(221, 217, 217);">
               <p style="filter: brightness(85%);">Avg. distance</p>
               <p class="text-2xl">384,400 km</p>
          </div>
          <div class="text-left" style="color: rgb(221, 217, 217);">
               <p style="filter: brightness(85%);">Est. travel time</p>
               <p class="text-2xl">3 days</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanetsBar from '../PlanetsBar.vue'
export default {
  name: 'MarsPage',
  components: {
    PlanetsBar,
  },
}
</script>

<style>
/* #wrapper{
  background: url('@/assets/destination/background-destination-desktop.jpg') no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
} */

</style>
