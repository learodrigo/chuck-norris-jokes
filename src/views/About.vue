<template>
  <div class="about">
        <joke-holder></joke-holder>
        <h1>Hola!</h1>
        <info></info>
    </div>
</template>

<script>
    import Info from '../components/Info'
    import JokeHolder from '../components/Jokes/JokeHolder'

    export default {
        name: "About",

        components: {
            Info,
            JokeHolder
        }
    }
</script>

<style scoped>

</style>
