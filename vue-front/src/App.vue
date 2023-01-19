<template>
    <Header />
    <Navbar />
    <!-- <Footer /> -->
    <RouterView />
</template>

<script>
import Header from './router/Header'
import Navbar from './router/Navbar'
// import Footer from './router/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Navbar,
        // Footer,
    }
}
</script>

<style lang="scss">
@import "~scss/main";

</style>
