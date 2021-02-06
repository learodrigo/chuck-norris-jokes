<template>
    <ul>
        <joke :key="cardJoke.id" :joke="cardJoke" :isBig="true"></joke>
        <div>
            <button @click="handleTrigger" id="trigger">Retrigger</button>
            <button @click="handleEmail" id="sendable">Send by email</button>
        </div>
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
            },

            handleIntervals () {
                this.handleAsync()
                this.changingQoutes = setInterval(this.handleAsync(), 30000)
            },

            handleTrigger (e) {
                e.preventDefault()
                clearInterval(this.changingQoutes)
                this.handleAsync()
            },

            handleEmail (e) {
                e.preventDefault()

                document.location = `mailto:user@example.com?subject=${'Chuck Norris quote machine'}&body=${this.cardJoke.value}`
            }
        },

        mounted () {
            this.handleIntervals()
        },
    }
</script>

<style lang="">

</style>
