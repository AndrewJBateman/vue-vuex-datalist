<template>
  <div class="md:flex md:justify-center mb-6">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="https://source.unsplash.com/random/400×600/?city,night"
        alt="Random photo from Unsplash"
      />
      <div class="px-6 py-4">
        <button
          class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
          @click="addData"
        >New Fact</button>
        <p class="text-gray-700 text-base pt-2">{{ data }}</p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#photography</span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#city</span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >#night</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions({ addData: "setCurrentData" }),
  },
  computed: {
    ...mapGetters({ data: "getCurrentData" }),
  },
};
</script>

<style scoped>
.home {
  max-height: 500px;
  max-width: 600px;
  align-items: center;
}

h3 {
  font-size: 2.5rem;
}
</style>
