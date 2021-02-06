<template>
    <div class="home">
        <joke-holder></joke-holder>
        <list-container></list-container>
        <router-view />
    </div>
</template>

<script>
    import JokeHolder from '../components/JokeHolder'
    import ListContainer from '../components/ListContainer'

    export default {
        name: "Home",

        components: {
            ListContainer,
            JokeHolder
        }
    }
</script>
