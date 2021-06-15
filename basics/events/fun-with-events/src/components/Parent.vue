<template>
    <div>
        <img v-if="showImage"
             alt="Mountainous forests of Adjara, Georgia" 
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
  })
}
</script>

<style scoped>
img {
    height: 400px;
}
</style>
