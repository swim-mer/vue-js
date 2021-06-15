<template>
    <div>
        <img alt="Mountainous forests of Adjara, Georgia" 
             src="../assets/marita-kavelashvili-ugnrXk1129g-unsplash.jpg"
        >
        <Child @status="showImage=$event" :showImage="showImage">
        </Child>
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: 'Parent',
  components: { Child },
  data: () => ({
    showImage: false
  }),
  props: {
    msg: {
        type: String,
        default: ''
    }
  },
  methods: {
      display(event) {
          console.log(event)
          this.displayImage = event
      }
  }
}
</script>

<style scoped>
img {
    height: 400px;
}
</style>
