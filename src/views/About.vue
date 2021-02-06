<template>
  <div class="about">
        <div class="about__joke-holder">
            <joke-holder></joke-holder>
        </div>

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

<style lang="scss" scoped>
.about {
    margin: 0 auto;

    max-width: 650px;

    > h1 {
        margin-bottom: 24px;
        text-align: center;
    }
}
.about__joke-holder {
    margin-bottom: 48px;
}
</style>
