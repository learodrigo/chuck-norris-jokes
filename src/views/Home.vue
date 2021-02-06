<template>
    <div class="home">
        <joke-holder></joke-holder>
        <list-container></list-container>
        <router-view />
    </div>
</template>

<script>
    import JokeHolder from '../components/Jokes/JokeHolder'
    import ListContainer from '../components/Jokes/ListContainer'

    export default {
        name: "Home",

        components: {
            ListContainer,
            JokeHolder
        }
    }
</script>
