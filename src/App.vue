<template>
    <nav-bar></nav-bar>
    <div class="title-info">
        <h1 class="info__title">Welcome to the Chunk Norris jokes machine</h1>
        <div class="info__text">
            <p>yeah... I was that surprise to at he beginning too!</p>
            <p>You can filter by category, and look for words</p>
            <p>It might not be the prittiest one, but for doing it in a day</p>
            <p>with a tool I didn't know that well, I would it's fine.</p>
            <p>It's not 100% complete yet.</p>
        </div>
    </div>
    <br>

    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script>
    import NavBar from './components/NavBar'

    export default {
        name: 'App',

        components: {
            NavBar
        }
    }
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}

.title-info {
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 36px;
    text-align: right;

    h1 {
        font-size: 48px;
    }
}
.info__title {
    margin-bottom: 48px;
}
.info__text {
    text-align: left;
}
</style>
