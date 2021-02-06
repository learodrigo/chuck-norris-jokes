<template>
    <div class="search-bar">
        <label class="label" for="site-search">Search the site:</label>
        <input v-on:keyup.enter="handleSubmit" @change="handleChange" v-model="query" class="input" type="search" id="site-search" name="q" placeholder="Try 'football'... " aria-label="Look for jokes">
        <button @click="handleSubmit" class="button">Search</button>
    </div>
</template>

<script>
export default {
    name: 'Search',

    data: () => {
        return {
            query: 'all'
        }
    },

    methods: {
        handleSubmit () {
            if (this.query.length > 3) {
                this.$emit('update:query', this.query)
            }
        },

        handleChange () {
            if (this.query.length < 3) {
                this.query = 'all'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$height: 34px;

.search-bar {
    .label {
        display: none;
    }
    .input {
        border: 1px solid lightgray;
        border-radius: 8px 0 0 8px;
        height: $height;
        max-width: 200px;
        min-width: 160px;
        padding: 4px 8px;
    }
    .button {
        height: $height;
        position: absolute;
        padding: 4px 8px;
        right: 0;
    }
}
</style>
