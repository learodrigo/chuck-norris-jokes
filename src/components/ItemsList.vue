<template>
    <div class="filters">
        <div>
            <h3>Category</h3>
            <dropdown @update:option="changeReceived" v-model="dropdownValue" :categories="categories"></dropdown>
        </div>

        <div>
            <search @update:query="updateQuery"></search>
        </div>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'
    import Search from './Search'

    export default {
        name: 'ItemsList',
        props: {
            categories: Array,
            totalNow: Number
        },

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
    position: relative;
}
</style>>
