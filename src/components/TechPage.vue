<template>
  <div id="wrapper" class="my-48">
    <h1 class="text-white text-2xl uppercase text-left mx-10">
      space launch 101
    </h1>
    <div
      class="flex flex-col-reverse md:flex-row justify-around items-center h-auto md:h-screen absolute"
      style="width: 95%; margin: 100px 2.5%;"
      v-if="techSlide == 0"
    >
      <div class="flex flex-row md:flex-col justify-around items-center my-4">
        <div
          class="border-2 divide-white text-white py-3 m-4 list-none cursor-pointer"
          v-for="(num, index) in serialNumber"
          :key="num"
          style="width: 50px; height: 50px; border-radius: 50%;"
          :class="
            techSlide == index ? 'bg-white text-black' : 'bg-none text-white'
          "
          @click="nextSlide(index)"
        >
          {{ num }}
        </div>
      </div>
      <div class="text-left w-10/12 md:w-96 my-8">
        <h3
          class="text-lg text-white uppercase"
          style="filter: brightness(60%);"
        >
          the terminology
        </h3>
        <h1 class="text-4xl text-white mb-6 uppercase">launch vehicle</h1>
        <p class="text-white leading-7">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </div>
      <div>
        <img
          src="@/assets/technology/image-launch-vehicle-portrait.jpg"
          alt="image"
          class="w-3/4 md:w-full"
          style="margin: 0 auto;"
        />
      </div>
    </div>

    <div
      class="flex flex-col-reverse md:flex-row justify-around items-center h-auto md:h-screen absolute"
      style="width: 95%; margin: 100px 2.5%;"
      v-if="techSlide == 1"
    >
      <div class="flex flex-row md:flex-col justify-around items-center my-4">
        <div
          class="border-2 divide-white text-white py-3 m-4 list-none cursor-pointer"
          v-for="(num, index) in serialNumber"
          :key="num"
          style="width: 50px; height: 50px; border-radius: 50%;"
          :class="
            techSlide == index ? 'bg-white text-black' : 'bg-none text-white'
          "
          @click="nextSlide(index)"
        >
          {{ num }}
        </div>
      </div>
      <div class="text-left w-10/12 md:w-96 my-8">
        <h3
          class="text-lg text-white uppercase"
          style="filter: brightness(60%);"
        >
          the terminology
        </h3>
        <h1 class="text-4xl text-white mb-6 uppercase">Spaceport</h1>
        <p class="text-white leading-7">
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </div>
      <div>
        <img
          src="@/assets/technology/image-spaceport-portrait.jpg"
          alt="image"
          class="w-3/4 md:w-full"
          style="margin: 0 auto;"
        />
      </div>
    </div>

    <div
      class="flex flex-col-reverse md:flex-row justify-around items-center h-auto md:h-screen absolute"
      style="width: 95%; margin: 100px 2.5%;"
      v-if="techSlide == 2"
    >
      <div class="flex flex-row md:flex-col justify-around items-center my-4">
        <div
          class="border-2 divide-white text-white py-3 m-4 list-none cursor-pointer"
          v-for="(num, index) in serialNumber"
          :key="num"
          style="width: 50px; height: 50px; border-radius: 50%;"
          :class="
            techSlide == index ? 'bg-white text-black' : 'bg-none text-white'
          "
          @click="nextSlide(index)"
        >
          {{ num }}
        </div>
      </div>
      <div class="text-left w-10/12 md:w-96 my-8">
        <h3
          class="text-lg text-white uppercase"
          style="filter: brightness(60%);"
        >
          the terminology
        </h3>
        <h1 class="text-4xl text-white mb-6 uppercase">Space capsule</h1>
        <p class="text-white leading-7">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </div>
      <div>
        <img
          src="@/assets/technology/image-space-capsule-portrait.jpg"
          alt="image"
          class="w-3/4 md:w-full"
          style="margin: 0 auto;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechPage',
  data() {
    return {
      serialNumber: ['1', '2', '3'],
      techSlide: 0,
    }
  },
  methods: {
    nextSlide(index) {
      this.techSlide = index
    },
  },
}
</script>

<style></style>
