<template>
    <li v-bind:class="['card', isBig ? 'special_card' : '']">
        <div class="card__category">
            <img
                :src="joke.icon_url"
                :alt="joke.value"
                v-bind:class="{'special_card__image' : isBig}"
            />
            <span
                v-if="joke.categories"
                v-bind:class="{'special_card__span' : isBig}">
                    {{ formatCategory(joke.categories[0]) }}
            </span>
        </div>

        <figure>
            <blockquote class="card__message" :cite="joke.url">
                <p style="flex">{{ joke.value }}</p>
            </blockquote>
            <figcaption>{{ randomFigCaption() }}</figcaption>
        </figure>

        <a target="_blank" :href="joke.url">Check online</a>
    </li>
</template>

<script>
    export default {
        name: 'Joke',
        props: {
            joke: Object,
            isBig: Boolean
        },

        data: () => {
            return {
                toggle: false,
                nicknames: ['Chuck', 'Chucky', 'Chuck Norris', 'Chucky Norris', 'Chuckytin Norris', 'Chip', 'Chuckie']
            }
        },

        methods: {
            formatCategory (cat) {
                return '[' + cat + ']'
            },

            randomFigCaption () {
                const randomIndex = Math.floor(Math.random() * (this.nicknames.length - 1))
                return '-' + this.nicknames[randomIndex]
            }
        },
    }
</script>

<style lang="scss" scoped>
.card {
    background: red;
    display: block;
    height: auto;
    text-align: center;

    a {
        background-color: #F15A24;
        color: white;
        display: inline-block;
        padding: 4px;
        text-decoration: none;
    }
}
.card__category {
    display: block;
    position: relative;
    width: 100%;

    span {
        background-color: black;
        color: white;
        display: inline-block;
        font-size: bold;
        left: 50%;
        padding: 2px;
        position: absolute;
    }
}
.card__message {
    align-items: center;
    display: flex;

    img {
        display: block;
        height: 30px;
        margin-right: 8px;
        width: 30px;
    }
}
.description {
    background-color: lightgray;
    padding: 10px;
}
.flex > *:first-child {
    margin-right: 8px;
}
.flex {
    justify-content: space-between;
}

.special_card {
    margin: 0 auto;
    max-width: 400px;

    .special_card__image,
    .special_card__span {
        display: none;
    }
}
</style>
