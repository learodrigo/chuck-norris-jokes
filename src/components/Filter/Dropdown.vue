<template>
    <select name="dropdown" id="dropdown" v-model="selectedOptions" @change="handleChange">
        <option value="null" disabled>Select a category</option>
        <option value="all" selected>All</option>

        <option v-for="category in categories" :value="category" v-bind:key="category" v-text="category"></option>
    </select>
</template>

<script>
    export default {
        name: 'Dropdown',
        props: ['categories'],

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
#dropdown {
    border: 0.5px solid darkgray;
    border-radius: 8px;
    height: 34px;
    width: 200px;
}
@media only screen and (max-width: 730px) {
    #dropdown {
        margin-bottom: 16px;
        width: 100%;
    }
}
</style>>
