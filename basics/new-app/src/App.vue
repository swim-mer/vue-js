<!-- COMPONENT -->
<template>
  <div>
    {{ msg }}
    <Stars v-bind:stars="stars" />
    <Planets v-bind:planets="planets" />
  </div>
</template>

<script>
import Stars from './components/Stars';
import Planets from './components/Planets';

export default {
  name: 'App',
  components: {
    Stars,
    Planets
  },
  data() {
    return {
      stars: [
        {
          id: 1,
          title: "Alpha Centauri",
          alive: true,
          planets: true
        },
        {
          id: 2,
          title: "WD 1856",
          alive: false,
          planets: true
        },
        {
          id: 3,
          title: "Proxima Centauri",
          alive: true,
          planets: true
        }
      ],
      msg: 'Basically, hey world, sup'
    }
  }
}
</script>

<style>
</style>
