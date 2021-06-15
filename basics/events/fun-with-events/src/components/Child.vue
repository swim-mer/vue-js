<template>
    <div>
        <img v-if="showImage"
             alt="Avocado seedling"
             src="../assets/istvan-hernek-a1B4e-gGPS8-unsplash.jpg"
        >
        <p>Click this button:
            <button @click="$emit('status', true)">
                Click Me To See Child Component
            </button>
            <button @click="$emit('status', false)">
                Reset
            </button>
        </p>
    </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
      showImage: {
          type: Boolean,
          default: false
      }
  }
}
</script>

<style scoped>
img {
    height: 400px;
}
</style>
