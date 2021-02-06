<template>
    <li v-bind:class="['card', isBig ? 'special_card' : '']">
        <a target="_blank" :href="joke.url">
            <div
                class="card__category"
                v-if="joke.categories && joke.categories[0] != undefined"
                v-bind:class="{'special_card__span' : isBig}"
                title="This is the quote category"
            >
                {{ formatCategory(joke.categories[0]) }}
            </div>

            <figure>
                <blockquote class="card__message" :cite="joke.url">
                    <p style="flex">{{ joke.value }}</p>
                </blockquote>
                <figcaption v-if="!isBig"><i>{{ randomFigCaption() }}</i></figcaption>
            </figure>
        </a>
    </li>
</template>

<script>
    export default {
        name: 'Joke',
        props: ['joke', 'isBig'],

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
    background: lightgray;
    border-radius: 8px 0 0 8px;
    border-right: 30px solid darkgray;
    box-shadow: -6px 5px 5px rgba(0, 0, 0, 0.3);
    display: block;
    height: auto;
    margin-bottom: 16px;
    padding: 16px;
    text-align: center;

    a {
        color: black;
        text-decoration: none;
    }

    &.special_card {
        border: none;
        border-radius: 8px;
        box-shadow: none;
        font-size: 20px;
        margin: 0 auto;
        max-width: 500px;
    }

    .special_card__image,
    .special_card__span {
        display: none;
    }
}
.card__category {
    background-color: black;
    color: white;
    display: inline-block;
    margin-bottom: 12px;
    position: relative;
    padding: 4px;
}
.card__message {
    align-items: center;
    display: flex;
    margin-bottom: 8px;

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
.card__message > p {
    text-align: left
}
.card__message > p > *:first-child {
    margin-right: 8px;
}
.card__message > p {
    justify-content: space-between;
}
@media only screen and (max-width: 730px) {
    .special_card {
        margin: 0 auto !important;
        max-width: none !important;
        width: 100%;
    }
}
</style>
