<template>
  <div
    class="flex justify-around items-center relative"
    style="width: 90%; margin: 200px auto;"
  >
    <div
      class="flex flex-col justify-around items-center w-1/2 h-screen"
    >
      <h2 class="text-xl" style="color: rgb(221, 217, 217);">
        PICK YOUR DESTINATION
      </h2>
      <img src="@/assets/destination/image-europa.png" alt="mars image" />
    </div>
    <div
      class="flex flex-col justify-around items-center w-1/2 h-96 m-auto"
    >
      <PlanetsBar />
      <h1 class="text-white text-left my-4" style="font-size: 72px;">EUROPA</h1>
      <p class="text-white w-2/3 text-left mb-12" style="line-height: 2;">
       The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.
      </p>
      <hr class="w-2/3 bg-gray-300 my-6" style="filter: brightness(45%);">
      <div class="flex justify-around items-center w-full h-auto">
          <div class="text-left" style="color: rgb(221, 217, 217);">
               <p style="filter: brightness(85%);">Avg. distance</p>
               <p class="text-2xl"> 628 mil. km</p>
          </div>
          <div class="text-left" style="color: rgb(221, 217, 217);">
               <p style="filter: brightness(85%);">Est. travel time</p>
               <p class="text-2xl">3 years</p>
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

<style></style>
