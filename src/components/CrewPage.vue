<template>
<div style="margin-top: 50px;">
<h1 class="text-white text-xl md:text-2xl text-left absolute" style="left: 5%;">
    MEET YOUR CREW
  </h1>

  <transition name="fade">
    <div
      class="flex flex-col-reverse md:flex-row justify-around items-center h-screen absolute"
      style="width: 90%; margin: 0 5%;"
      v-if="currentSlide == 0"
    >
      <div
        class="flex flex-col justify-between items-center w-10/12 md:w-1/2 text-left"
      >
        <div class="leading-6 mb-10 w-full md:w-1/2">
          <p
            class="text-xl md:text-2xl uppercase mb-1"
            style="color: rgb(221, 217, 217); filter: brightness(65%);"
          >
            Flight Engineer
          </p>
          <h3 class="text-white text-3xl md:text-4xl uppercase">
            Anousheh Ansari
          </h3>
        </div>
        <p class="text-white w-full md:w-3/4 leading-7">
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
      </div>

      <div class="w-1/2">
        <img
          src="@/assets/crew/image-anousheh-ansari.webp"
          alt="anousheh-ansari"
          class="w-full md:w-3/4"
        />
      </div>
    </div>
  </transition>

  <transition name="fade">
    <div
      class="flex flex-col-reverse md:flex-row justify-around items-center h-screen absolute"
      style="width: 90%; margin: 0 5%;"
      v-if="currentSlide == 1"
    >
      <div
        class="flex flex-col justify-between items-center w-10/12 md:w-1/2 text-left"
      >
        <div class="leading-6 mb-10 w-full md:w-1/2">
          <p
            class="text-xl md:text-2xl uppercase mb-1"
            style="color: rgb(221, 217, 217); filter: brightness(65%);"
          >
            commander
          </p>
          <h3 class="text-white text-3xl md:text-4xl uppercase">
            Douglas Hurley
          </h3>
        </div>
        <p class="text-white w-full md:w-3/4 leading-7">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>

      <div class="w-1/2">
        <img
          src="@/assets/crew/image-douglas-hurley.webp"
          alt="anousheh-ansari"
          class="w-full md:w-3/4"
        />
      </div>
    </div>
  </transition>

  <transition name="fade">
    <div
      class="flex flex-col-reverse md:flex-row justify-around items-center h-screen absolute"
      style="width: 90%; margin: 0 5%;"
      v-if="currentSlide == 2"
    >
      <div
        class="flex flex-col justify-between items-center w-10/12 md:w-1/2 text-left"
      >
        <div class="leading-6 mb-10 w-full md:w-1/2">
          <p
            class="text-xl md:text-2xl uppercase mb-1"
            style="color: rgb(221, 217, 217); filter: brightness(65%);"
          >
            pilot
          </p>
          <h3 class="text-white text-3xl md:text-4xl uppercase">
            Victor Glover
          </h3>
        </div>
        <p class="text-white w-full md:w-3/4 leading-7">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
      </div>

      <div class="w-1/2">
        <img
          src="@/assets/crew/image-victor-glover.webp"
          alt="anousheh-ansari"
          class="w-full md:w-3/4"
        />
      </div>
    </div>
  </transition>

  <transition name="fade">
    <div
      class="flex flex-col-reverse md:flex-row justify-around items-center h-screen absolute"
      style="width: 90%; margin: 0 5%;"
      v-if="currentSlide == 3"
    >
      <div
        class="flex flex-col justify-between items-center w-10/12 md:w-1/2 text-left"
      >
        <div class="leading-6 mb-10 w-full md:w-1/2">
          <p
            class="text-xl md:text-2xl uppercase mb-1"
            style="color: rgb(221, 217, 217); filter: brightness(65%);"
          >
            Mission Specialist
          </p>
          <h3 class="text-white text-3xl md:text-4xl uppercase">
            Mark Shuttleworth
          </h3>
        </div>
        <p class="text-white w-full md:w-3/4 leading-7">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
  
      </div>

      <div class="w-1/2">
        <img
          src="@/assets/crew/image-mark-shuttleworth.webp"
          alt="anousheh-ansari"
          class="w-full md:w-1/2"
        />
      </div>
    </div>
  </transition>
  <div class="h-screen" style="width: 90%;">
    <div class="absolute -bottom-3/4 flex justify-center w-full">
      <div
        class="w-4 h-4 rounded-full mx-2"
        v-for="item in dot"
        :key="item"
        :class="dot"
      ></div>
    </div>
  </div>
</div>
</template>
  
<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slideInterval: '',
      dot: ['bg-gray-300', 'bg-gray-300', 'bg-gray-300', 'bg-gray-300'],
      dotActive: '',
    }
  },
  mounted() {
    this.slideInterval = setInterval(() => {
      this.currentSlide == 3 ? (this.currentSlide = 0) : this.currentSlide++
    }, 5000)
  },
  beforeUnmount() {
    clearInterval(this.slideInterval)
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
 transform: translateX(-100%); 
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.active-slide {
  background-color: rgb(99, 94, 94);
}
</style>
