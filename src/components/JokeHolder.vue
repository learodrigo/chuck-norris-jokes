<template>
    <ul>
        <joke :key="cardJoke.id" :joke="cardJoke" :isBig="true"></joke>
    </ul>
</template>

<script>
    import Joke from './Joke'

    export default {
        name: 'JokeHolder',
        props: {
            joke: Object
        },

        components: {
            Joke
        },

        data: () => {
            return {
                cardJoke: {}
            }
        },

        methods: {
            async newRandomJoke () {
                await axios.get('https://api.chucknorris.io/jokes/random')
                .then(res => this.cardJoke = res.data)
                .catch(e => {
                    this.cardJoke.value = "No quotes found, try something else"
                    console.error(e)
                })
            },
        },

        mounted () {
            try {
                this.newRandomJoke()
            }
            catch (e) {
                console.error(e)
            }
        },
    }
</script>

<style lang="">

</style>
