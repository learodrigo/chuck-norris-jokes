<template>
    <ul clases="joke-holder">
        <div v-if="failed" class="joke-holder__alter"></div>
        <joke :key="cardJoke.id" :joke="cardJoke" :isBig="true"></joke>

        <div class="joke-holder__buttons">
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
            Joke,
        },

        data: () => {
            return {
                cardJoke: {},
                changingQoutes: null,
                isLoading: false,
                failed: false
            }
        },

        methods: {
            async newRandomJoke () {
                this.isLoading = true

                await axios.get('https://api.chucknorris.io/jokes/random')
                .then(res => {
                    this.cardJoke = res.data
                })
                .catch(e => {
                    this.failed = true
                    this.isLoading = false
                    this.cardJoke.value = "No quotes found, try something else"
                    console.error(e)
                })
                .finally(() => this.isLoading = false)
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

<style lang="scss" scoped>
.joke-holder {
    display: block;
    width: 500px;
}

.joke-holder__buttons {
    align-items: center;
    display: flex;
    justify-content: space-between;
}
</style>
