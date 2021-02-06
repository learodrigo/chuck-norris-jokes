<template>
    <div class="container">
        <items-list
            @update:option="valueReceived"
            @update:query="updateQuery"
            v-model="selectedOptions"
            :categories="categories"
        >
        </items-list>

        <ul>
            <joke v-for="joke in allJokes.result" :key="joke.id" :joke="joke"></joke>
        </ul>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'
    import ItemsList from './ItemsList'
    import Joke from './Joke'

    export default {
        name: 'ListContainer',

        components: {
            Dropdown,
            ItemsList,
            Joke
        },

        data: () => {
            return {
                allJokes: [],
                categories: [],
                selectedOptions: null
            }
        },

        methods: {
            async fetchAllJokes (q = 'all') {
                await axios.get(`https://api.chucknorris.io/jokes/search?query=${q}`)
                .then(res => this.allJokes = res.data)
                .catch(e => {
                    this.allJokes = []
                    console.error(e)
                })
            },

            async loadCategories () {
                await axios.get('https://api.chucknorris.io/jokes/categories')
                .then(res => this.categories = res.data)
                .catch(e => console.error(e))
            },

            filterJokes (category) {
                try {
                    this.fetchAllJokes()
                }
                catch (e) {
                    console.error(e)
                }
                finally {
                    const res = this.allJokes.result.filter(j => j.categories[0] === category)
                    this.allJokes = res
                }
            },

            updateQuery (q) {
                this.fetchAllJokes(q)
            },

            valueReceived (category) {
                this.filterJokes(category)
            },
        },

        mounted () {
            try {
                this.loadCategories()
                this.fetchAllJokes()
            }
            catch (e) {
                console.error(e)
            }
        },
    }
</script>

<style lang="scss" scoped>
.container {
    display: block;
    margin: 0 auto;
    width: 680px;
}
</style>>
