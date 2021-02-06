<template>
    <nav class="navbar">
        <ul>
            <li>
                <router-link class="links" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
                <router-link class="links" :to="{ name: 'About' }">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style lang="scss">
.navbar > ul {
    display: flex;
    justify-content: space-between;
}
.links.router-link-exact-active {
    border-bottom: 4px solid #F15A24;
    color: #F15A24 !important;
    font-weight: bold;
}
.links {
    border-bottom: 2px solid black;
    color: black;
    display: inline-block;
    font-size: 24px;
    font-weight: normal;
    height: 24px;
    text-decoration: none;
}
.links:hover {
    border: none;
    text-decoration: line-through;
}
</style>
