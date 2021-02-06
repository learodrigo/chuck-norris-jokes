<template>
    <ul class="joke-holder">
        <div class="joke-holder__buttons">
            <button @click="handleTrigger" id="trigger">Retrigger</button>
            <span class="button__description">This card changes every 30 seconds</span>
            <button @click="handleEmail" id="sendable">Send by email</button>
        </div>

        <joke :key="cardJoke.id" :joke="cardJoke" :isBig="true"></joke>

        <div v-if="failed" class="joke-holder__alter"></div>
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
$max-width: 500px;

.joke-holder {
    display: block;
    margin: 0 auto;
    width: $max-width;
}

.joke-holder__buttons {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 24px auto 32px auto;
    width: $max-width;
}

#trigger,
    #sendable {
        border: 0;
        border-radius: 4px;
        color: white;
        padding: 4px 8px;
    }
    #trigger {
        background-color: #2955ce;
    }
    #sendable {
        background-color: #ce2955;
    }

.button__description {
    display: inline-block;
    font-size: 10px;
    padding: 8px;
}

@media only screen and (max-width: 730px) {
    .joke-holder {
        margin: 0 auto !important;
        width: 90% !important;
    }
    .joke-holder__buttons {
        flex-direction: column;
    }
    .button__description {
        display: none;
    }
    #trigger,
    #sendable {
        padding: 16px;
        width: 100%;
    }
    #trigger {
        margin-bottom: 16px;;
    }
}
</style>
