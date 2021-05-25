<template>
    <div class="container">
        <h1>My pet is a {{ animal_type }} named {{ msg }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
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