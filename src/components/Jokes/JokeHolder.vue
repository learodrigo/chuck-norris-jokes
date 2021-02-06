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
                cardJoke: {},
                changingQoutes: null
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

            handleAsync () {
                try {
                    this.newRandomJoke()
                }
                catch (e) {
                    console.error(e)
                }
            }
        },

        mounted () {
            this.handleAsync()
            this.changingQoutes = setInterval(this.handleAsync(), 30000)
        },
    }
</script>

<style lang="">

</style>
