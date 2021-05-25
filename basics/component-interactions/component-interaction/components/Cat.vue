<template>
    <div class="container">
        <Pet animal_type="cat" animal_name="Annie">
        </Pet>
        <h2>{{ animal_name }}'s breed is {{ breed }}.</h2>
    </div>
</template>

<script>
import Pet from '~/components/Pet'
export default {
  components: { Pet },
  props: {
      breed: {
          type: String,
          default: ''
      }
  }
}
</script>


<style scoped>

</style>