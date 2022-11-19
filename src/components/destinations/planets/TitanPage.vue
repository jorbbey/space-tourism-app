<template>
  <div
    class="flex justify-around items-center relative"
    style="width: 90%; margin: 200px auto;"
  >
    <div class="flex flex-col justify-around items-center w-1/2 h-screen">
      <h2 class="text-xl" style="color: rgb(221, 217, 217);">
        PICK YOUR DESTINATION
      </h2>
      <img src="@/assets/destination/image-titan.png" alt="mars image" />
    </div>
    <div class="flex flex-col justify-around items-center w-1/2 h-96 m-auto">
      <PlanetsBar />
      <h1 class="text-white text-left my-4" style="font-size: 72px;">TITAN</h1>
      <p class="text-white w-2/3 text-left mb-12" style="line-height: 2;">
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr class="w-2/3 bg-gray-300 my-6" style="filter: brightness(45%);" />
      <div class="flex justify-around items-center w-full h-auto">
        <div class="text-left" style="color: rgb(221, 217, 217);">
          <p style="filter: brightness(85%);">Avg. distance</p>
          <p class="text-2xl">1.6 bil. km</p>
        </div>
        <div class="text-left" style="color: rgb(221, 217, 217);">
          <p style="filter: brightness(85%);">Est. travel time</p>
          <p class="text-2xl">7 years</p>
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
