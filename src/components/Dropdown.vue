<template>
    <select name="dropdown" id="dropdown" v-model="selectedOptions" @change="handleChange">
        <option value="all" selected>All</option>
        <option v-for="category in this.categories" :value="category" v-text="category"></option>
    </select>
</template>

<script>
    export default {
        name: 'Dropdown',
        props: {
            categories: Array
        },

        data: () => {
            return {
                selectedOptions: null
            }
        },

        methods: {
            handleChange () {
                this.$emit('update:option', this.selectedOptions)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>>
