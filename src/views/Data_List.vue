<template>
  <div>
    <h1 class="text-3xl p-12 font-extrabold">List of random facts</h1>
    <p v-for="(data,idx) in datas" :key="idx">
      <span class="text-blue-700 align-left">{{idx+1}} </span>
      {{data}}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    computed: {
      ...mapGetters({
        datas: "getAllDatas"
      })
    }
  };
</script>

<style scoped>
  h4 {
    color: blueviolet;
    font-weight: bolder;
    font-size: 2.5rem;
  }

  p {
    align-content: left;
  }
</style>
