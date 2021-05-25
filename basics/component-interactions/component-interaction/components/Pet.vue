<template>
    <div class="container">
        <h1>My pet is a {{ animal_type }} named {{ animal_name }}.</h1>
    </div>
</template>

<script>
export default {
    props: {
        animal_name: {
            type: String,
            default: ''
        },
        animal_type: {
            type: String,
            default: ''
        }
    }
}
</script>


<style scoped>

</style>