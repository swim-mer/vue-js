<template>
  <div>
    <h1>Stars</h1>
    <div v-bind:key="star.id" v-for="star in stars">
      <h3>{{ star.title }}</h3>
      <Planets v-bind:star="star" />
    </div>
  </div>
</template>

<script>
import Planets from './Planets.vue';

export default {
  name: "Stars",
  components: {
    Planets
  },
  props: ["stars"]
}
</script>

<style scoped>

</style>
