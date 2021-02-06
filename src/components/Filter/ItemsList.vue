<template>
    <div class="filters">
        <dropdown @update:option="changeReceived" v-model="dropdownValue" :categories="categories"></dropdown>
        <search @update:query="updateQuery"></search>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'
    import Search from './Search'

    export default {
        name: 'ItemsList',
        props: ['categories', 'totalNow'],

        components: {
            Dropdown,
            Search
        },

        data: () => {
            return {
                dropdownValue: '',
                q: ''
            }
        },

        methods: {
            changeReceived (value) {
                this.dropdownValue = value
                this.$emit('update:option', value)
            },

            updateQuery (value) {
                this.q = value
                this.$emit('update:query', value)
            }
        }
    }
</script>

<style lang="scss" scoped>
.filters {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 24px;
    position: relative;
}
@media only screen and (max-width: 730px) {
    .filters {
        flex-direction: column;
    }
}
</style>>
